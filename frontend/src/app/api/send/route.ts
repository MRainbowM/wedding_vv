import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const formData = await req.json();

    const response = await fetch(`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
