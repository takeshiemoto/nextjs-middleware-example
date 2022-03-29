import type { NextFetchEvent, NextRequest } from 'next/server';

export type Middleware = (
  req: NextRequest,
  event: NextFetchEvent
) => Response | void | Promise<Response | void>;
