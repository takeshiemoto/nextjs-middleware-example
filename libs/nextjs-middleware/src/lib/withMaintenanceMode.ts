import type { NextFetchEvent, NextRequest } from 'next/server';

import { Middleware } from './types';

export const withMaintenance = (middleware?: Middleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    if (req.ip === '106.184.63.255') {
      return new Response('Maintenance');
    }

    if (!middleware) {
      return;
    }

    return middleware(req, event);
  };
};
