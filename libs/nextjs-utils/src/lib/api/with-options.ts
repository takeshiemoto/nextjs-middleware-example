import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export type HandlerOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

const defaultOptions: HandlerOptions = { method: 'GET' };

/**
 * API Routeをラップしてオプションを設定できるようにする
 */
export const withOptions = <T = any>(
  handler: NextApiHandler<T>,
  options: HandlerOptions = defaultOptions
) => {
  return async (
    req: NextApiRequest,
    res: NextApiResponse<T | ReasonPhrases>
  ) => {
    if (req.method !== options.method) {
      res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send(ReasonPhrases.METHOD_NOT_ALLOWED);
      return;
    }

    await handler(req, res);
  };
};
