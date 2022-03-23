/* eslint-disable react-hooks/rules-of-hooks,react/display-name */
import { NextRouter, useRouter } from 'next/router';
import { ComponentType, VFC } from 'react';

import { Loading } from './Loading';
import { SafeHydrate } from './SafeHydrate';

export type WithReadyRouterProps = { router: NextRouter };

export const withReadyRouter = (
  Component: ComponentType<WithReadyRouterProps>
): VFC<Omit<WithReadyRouterProps, 'router'>> => {
  return (props: any): JSX.Element | null => {
    const router = useRouter();

    if (!router.isReady) {
      return <Loading />;
    }

    return (
      <SafeHydrate>
        <Component {...props} router={router} />
      </SafeHydrate>
    );
  };
};
