import { usePostAddPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { PostAddPresenter } from './PostAddPresenter';

export const PostAddContainer = () => {
  const { data, loading, error } = usePostAddPageQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  if (!data || !data.users.length) {
    return <Error statusCode={404} />;
  }

  return <PostAddPresenter postAddPageQuery={data} />;
};
