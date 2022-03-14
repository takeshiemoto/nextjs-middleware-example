import { NextRequest, NextResponse } from 'next/server';

const ALLOW_IPS = [''];

export function middleware(req: NextRequest) {
  const ipAddress = req.ip;

  if (!ALLOW_IPS.includes(ipAddress)) {
    return new Response('現在メンテナス中です');
  }

  return NextResponse.next();
}
