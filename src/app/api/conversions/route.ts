import { NextRequest, NextResponse } from "next/server";
import { sendMetaConversionEvent } from "@/lib/capi";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventSourceUrl, userData = {}, customData = {} } = body;

    if (!eventName) {
      return NextResponse.json({ error: "eventName is required" }, { status: 400 });
    }

    // Extract client IP and User Agent from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || undefined;
    const clientUserAgent = request.headers.get("user-agent") || undefined;

    // Extract Meta tracking cookies (_fbp and _fbc)
    const fbp = request.cookies.get("_fbp")?.value;
    const fbc = request.cookies.get("_fbc")?.value;

    const result = await sendMetaConversionEvent({
      eventName,
      eventId,
      eventSourceUrl: eventSourceUrl || request.headers.get("referer") || undefined,
      userData: {
        ...userData,
        clientIp,
        clientUserAgent,
        fbp: fbp || userData.fbp,
        fbc: fbc || userData.fbc,
      },
      customData,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[CAPI Route Handler Error]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

