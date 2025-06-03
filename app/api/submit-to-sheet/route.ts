import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  const webhookURL = process.env.NEXT_PUBLIC_HOTELS_SHEETS as string;

  try {
    await fetch(webhookURL, {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error submitting to sheet:", err);
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
  }
}
