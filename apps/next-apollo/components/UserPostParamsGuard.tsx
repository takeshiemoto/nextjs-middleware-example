import NextError from 'next/error';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext } from 'react';

type ContextValue = {
  userId: number;
  postId: number;
};

const Context = createContext<ContextValue | undefined>(undefined);
const Provider = Context.Provider;

export const UserPostParamsGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const userId = Number(router.query['userId']);
  const postId = Number(router.query['postId']);

  if (!userId || !postId) {
    return <NextError statusCode={404} />;
  }

  const value: ContextValue = {
    userId,
    postId,
  };

  return <Provider value={value}>{children}</Provider>;
};

export const useUserPostParams = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error(
      'useUserPostParamsはUserPostParamsGuardの中で利用してください'
    );
  }

  return value;
};