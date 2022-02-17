import { NextRequest, NextResponse } from 'next/server';

const BLOCKED_IP = ['61.213.94.149'];

export function middleware(req: NextRequest) {
  const ipAddress = req.ip;

  if (BLOCKED_IP.includes(ipAddress)) {
    return new Response('このIPアドレスはブロックされています');
  }

  return NextResponse.next();
}
