import type { NextFetchEvent, NextRequest } from 'next/server';

import { Middleware } from './types';

const Repository = {
  async getAll() {
    return Promise.reject('Error');
  },
};

export const withMaintenance = (middleware?: Middleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    try {
      await Repository.getAll();
    } catch (error) {
      return new Response(String(error));
    }

    if (!middleware) {
      return;
    }

    return middleware(req, event);
  };
};
