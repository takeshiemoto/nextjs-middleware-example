import type { NextFetchEvent, NextRequest } from 'next/server';

import { Middleware } from './types';

export const withMaintenance = (middleware?: Middleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    if (!middleware) {
      return;
    }

    return middleware(req, event);
  };
};
