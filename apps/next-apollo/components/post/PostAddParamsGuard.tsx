import NextError from 'next/error';
import { createContext, useContext } from 'react';

import { withReadyRouter } from '../app/withReadyRouter';

type ContextValue = {
  userId?: number;
};

const Context = createContext<ContextValue | undefined>(undefined);
const Provider = Context.Provider;

export const PostAddParamsGuard = withReadyRouter(({ children, router }) => {
  if (!router.query['userId']) {
    return <Provider value={{ userId: undefined }}>{children}</Provider>;
  }

  const userId = Number(router.query['userId']);

  // Number型にできない値は不正なクエリ
  // 仕様によっては不要かもしれない
  if (isNaN(userId)) {
    return <NextError statusCode={500} />;
  }

  return <Provider value={{ userId }}>{children}</Provider>;
});

export const usePostAddParams = () => {
  return useContext(Context);
};
