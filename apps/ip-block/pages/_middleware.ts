import { NextRequest } from 'next/server';
import { withIPBlock } from '@nextjs-middleware-example/nextjs-middleware';

export function middleware(req: NextRequest) {
  console.log(new Date());
  return withIPBlock(req);
}
