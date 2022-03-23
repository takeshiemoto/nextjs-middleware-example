import NextError from 'next/error';
import { createContext, useContext } from 'react';

import { withReadyRouter } from '../app/withReadyRouter';

type ContextValue = {
  userId: number;
};

const Context = createContext<ContextValue | undefined>(undefined);
const Provider = Context.Provider;

export const UserParamsGuard = withReadyRouter(({ router, children }) => {
  const userId = Number(router.query['userId']);

  if (!userId) {
    return <NextError statusCode={404} />;
  }

  const value: ContextValue = {
    userId,
  };

  return <Provider value={value}>{children}</Provider>;
});

export const useUserParams = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error(
      'useUserPostsPageParamsはUserPostPageParamsProviderの中で利用してください'
    );
  }

  return value;
};
