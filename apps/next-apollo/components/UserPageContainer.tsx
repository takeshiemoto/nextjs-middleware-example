import { useUserPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { UserPagePresenter } from './UserPagePresenter';
import { useUserParams } from './UserParamsGuard';

export const UserPageContainer = () => {
  const { userId } = useUserParams();

  const { data, loading, error } = useUserPageQuery({
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
  return <UserPagePresenter userPageQuery={data} />;
};
