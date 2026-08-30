export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "2090072425255791";

export const pageview = () => {
  if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "PageView");
  }
};

export const event = (
  name: string,
  options: Record<string, unknown> = {},
  extraParams?: { eventID?: string }
) => {
  if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    if (extraParams?.eventID) {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", name, options, extraParams);
    } else {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", name, options);
    }
  }
};

/**
 * Tracks an event concurrently via both Browser Pixel & Server Conversions API (CAPI)
 * with deduplication via a unique eventId.
 */
export async function trackDualConversion({
  eventName,
  userData = {},
  customData = {},
  eventId,
}: {
  eventName: "Lead" | "CompleteRegistration" | "InitiateCheckout" | "Contact" | "ViewContent" | "SubmitApplication" | string;
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
  };
  customData?: Record<string, unknown>;
  eventId?: string;
}) {
  const generatedEventId = eventId || `ev_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // 1. Browser Pixel Track
  event(eventName, customData, { eventID: generatedEventId });

  // 2. Server CAPI Track
  try {
    await fetch("/api/conversions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId: generatedEventId,
        eventSourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
        userData,
        customData,
      }),
    });
  } catch (err) {
    console.error("[CAPI Dispatch Error]", err);
  }
}
