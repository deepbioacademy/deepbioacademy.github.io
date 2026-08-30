import crypto from "crypto";

export interface ServerEventUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  clientIp?: string;
  clientUserAgent?: string;
  fbp?: string;
  fbc?: string;
}

export interface ServerEventCustomData {
  currency?: string;
  value?: number;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  [key: string]: unknown;
}

export interface SendServerEventParams {
  eventName: "Lead" | "CompleteRegistration" | "InitiateCheckout" | "Contact" | "ViewContent" | "SubmitApplication" | string;
  eventSourceUrl?: string;
  eventId?: string; // Used for deduplication with browser pixel
  userData?: ServerEventUserData;
  customData?: ServerEventCustomData;
}

function hashSha256(value?: string): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

export async function sendMetaConversionEvent({
  eventName,
  eventSourceUrl,
  eventId,
  userData = {},
  customData = {},
}: SendServerEventParams) {
  const pixelId = process.env.FB_PIXEL_ID || process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "2090072425255791";
  const accessToken = process.env.FB_ACCESS_TOKEN;
  const testEventCode = process.env.FB_TEST_EVENT_CODE; // Optional: used in Meta Events Manager test sandbox

  if (!accessToken) {
    console.warn("[Meta CAPI] FB_ACCESS_TOKEN is not configured in environment variables.");
    return { success: false, error: "Missing FB_ACCESS_TOKEN" };
  }

  const currentTimestamp = Math.floor(Date.now() / 1000);

  const payloadUserData: Record<string, unknown> = {
    client_ip_address: userData.clientIp,
    client_user_agent: userData.clientUserAgent,
    fbp: userData.fbp,
    fbc: userData.fbc,
  };

  if (userData.email) payloadUserData.em = [hashSha256(userData.email)];
  if (userData.phone) payloadUserData.ph = [hashSha256(userData.phone)];
  if (userData.firstName) payloadUserData.fn = [hashSha256(userData.firstName)];
  if (userData.lastName) payloadUserData.ln = [hashSha256(userData.lastName)];

  const eventPayload: Record<string, unknown> = {
    event_name: eventName,
    event_time: currentTimestamp,
    action_source: "website",
    event_source_url: eventSourceUrl,
    event_id: eventId,
    user_data: payloadUserData,
    custom_data: customData,
  };

  const body: Record<string, unknown> = {
    data: [eventPayload],
  };

  if (testEventCode) {
    body.test_event_code = testEventCode;
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("[Meta CAPI Error]", result);
      return { success: false, error: result };
    }

    return { success: true, result };
  } catch (error) {
    console.error("[Meta CAPI Network Error]", error);
    return { success: false, error };
  }
}

