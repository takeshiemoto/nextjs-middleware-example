import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  return new Response(process.env.MESSAGE);
};
