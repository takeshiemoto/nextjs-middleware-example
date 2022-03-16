import { NextRequest, NextResponse } from 'next/server';

const ipBlocked = false;

export async function withIPBlock(req: NextRequest) {
  console.log('[withIPBlock]');
  if (ipBlocked) {
    return new NextResponse('このIPではアクセスできません');
  }

  return;
}
