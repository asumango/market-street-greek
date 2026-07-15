import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, chapter, email, eventType, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // TODO: wire up an email provider (e.g. Resend) to forward this to
  // hello@marketststudios.com. Logging for now so the form is functional
  // end-to-end during development.
  console.log("New inquiry:", { name, chapter, email, eventType, message });

  return NextResponse.json({ ok: true });
}
