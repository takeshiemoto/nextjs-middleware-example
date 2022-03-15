import type { NextFetchEvent } from 'next/server';
import { NextRequest } from 'next/server';

type Middleware = (
  req: NextRequest,
  event: NextFetchEvent
) => Response | void | Promise<Response | void>;

/**
 * 左から右へ非同期ミドルウェアを実行する
 * レスポンスを返した最初のミドルウェアで停止する
 */
export function first(...args: Middleware[]) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return async function handler(req: NextRequest, event: NextFetchEvent) {
    for await (const middleware of args) {
      const res = await middleware(req, event);
      if (res) return res;
    }
  };
}
