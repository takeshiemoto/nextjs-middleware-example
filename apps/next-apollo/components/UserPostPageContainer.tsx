import { useUserPostPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { useUserPostPageParams } from './UserPostPageParamsContext';
import { UserPostPagePresenter } from './UserPostPagePresenter';

export const UserPostPageContainer = () => {
  const { userId, postId } = useUserPostPageParams();

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
