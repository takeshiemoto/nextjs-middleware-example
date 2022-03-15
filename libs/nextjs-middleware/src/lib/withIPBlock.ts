import { NextRequest, NextResponse } from 'next/server';

const ipBlocked = true;

export async function withIPBlock(req: NextRequest) {
  console.log('[withIPBlock]');
  if (ipBlocked) {
    return new NextResponse('このIPではアクセスできません');
  }

  return;
}
