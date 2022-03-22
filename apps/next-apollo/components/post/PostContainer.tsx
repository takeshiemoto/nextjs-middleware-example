import { usePostPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { usePostParams } from './PostParamsGuard';
import { PostPresenter } from './PostPresenter';

export const PostContainer = () => {
  const { postId } = usePostParams();

  const { data, loading, error } = usePostPageQuery({
    variables: {
      postId,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  if (!data || !data.posts.length) {
    return <Error statusCode={404} />;
  }

  return <PostPresenter postPageQuery={data} />;
};
