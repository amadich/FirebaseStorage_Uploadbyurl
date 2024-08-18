import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch image from URL');

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      headers: { 'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream' }
    });
  } catch (error) {
    console.error('Failed to fetch image from URL:', error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
