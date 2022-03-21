import { useUserPostsPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { useUserPostsPageParams } from './UserPostsPageParamsContext';
import { UserPostsPagePresenter } from './UserPostsPagePresenter';

export const UserPostsPageContainer = () => {
  const { userId } = useUserPostsPageParams();

  const { data, loading, error } = useUserPostsPageQuery({
    variables: {
      userId,
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
  if (!data || !data.users.length) {
    return <Error statusCode={404} />;
  }

  /**
   * ContainerはUIを持たないでおく（責務を明確にする！）
   */
  return <UserPostsPagePresenter userPostsPageQuery={data} />;
};
