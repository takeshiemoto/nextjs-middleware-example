import { useUserPostPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { UserPostPagePresenter } from './UserPostPagePresenter';
import { useUserPostParams } from './UserPostParamsGuard';

export const UserPostPageContainer = () => {
  const { userId, postId } = useUserPostParams();

  const { data, loading, error } = useUserPostPageQuery({
    variables: {
      userId,
      postId,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  /**
   * データが存在しない場合のガードはContainerに書く
   */
  if (!data || !data.posts.length) {
    return <Error statusCode={404} />;
  }

  /**
   * ContainerはUIを持たないでおく（責務を明確にする！）
   */
  return <UserPostPagePresenter userPostPageQuery={data} />;
};
