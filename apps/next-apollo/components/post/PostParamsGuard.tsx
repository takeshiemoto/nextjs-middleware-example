import NextError from 'next/error';
import { createContext, useContext } from 'react';

import { withReadyRouter } from '../app/withReadyRouter';

type ContextValue = {
  postId: number;
};

const Context = createContext<ContextValue | undefined>(undefined);
const Provider = Context.Provider;

export const PostParamsGuard = withReadyRouter(({ children, router }) => {
  const postId = Number(router.query['postId']);
  if (!postId) {
    return <NextError statusCode={404} />;
  }

  const value: ContextValue = {
    postId,
  };

  return <Provider value={value}>{children}</Provider>;
});

export const usePostParams = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error('usePostParamsはPostParamsGuardの中で利用してください');
  }

  return value;
};
