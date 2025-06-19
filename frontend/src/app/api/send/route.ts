import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, guests, attendance } = body;

    const scriptURL = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`;

    const res = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, guests, attendance }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Google Script Error:', text);
      return NextResponse.json({ error: 'Google Script request failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
