import { NotFoundError, ServerError } from '@nextjs-middleware-example/errors';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

export const withError = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(
  getServerSideProps: GetServerSideProps<P, Q>
) => {
  return async (
    ctx: GetServerSidePropsContext<Q>
  ): Promise<GetServerSidePropsResult<P>> => {
    try {
      const res = await getServerSideProps(ctx);

      return {
        ...res,
      };
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          notFound: true,
        };
      }

      if (error instanceof ServerError) {
        return {
          redirect: {
            permanent: false,
            destination: '/server-error',
          },
        };
      }

      return {
        redirect: {
          permanent: false,
          destination: '/maintenance',
        },
      };
    }
  };
};
