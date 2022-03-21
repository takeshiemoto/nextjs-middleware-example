import NextError from 'next/error';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext } from 'react';

type ContextValue = {
  userId: number;
};

const Context = createContext<ContextValue | undefined>(undefined);
const Provider = Context.Provider;

export const UserPageParamsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  /**
   * データ取得する前にガードできる内容をここに書く
   * ※Next.jsなのでgetServerSidePropsとかでやりたいが...
   */
  const router = useRouter();
  const userId = Number(router.query['userId']);

  if (!userId) {
    return <NextError statusCode={404} />;
  }

  const value: ContextValue = {
    userId,
  };

  return <Provider value={value}>{children}</Provider>;
};

export const useUserPageParams = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error(
      'useUserPageParamsはUserPostPageParamsProviderの中で利用してください'
    );
  }

  return value;
};
