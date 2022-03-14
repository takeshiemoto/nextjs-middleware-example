import { NextRequest, NextResponse } from 'next/server';

export const withIPBlock = (req: NextRequest) => {
  const res = NextResponse.next();

  return res;
};
