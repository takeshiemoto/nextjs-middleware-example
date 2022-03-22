import { useUserEditPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { useUserParams } from './UserParamsGuard';
import { UserEditPresenter } from './UserEditPresenter';

export const UserEditContainer = () => {
  const { userId } = useUserParams();
  const { data, loading, error } = useUserEditPageQuery({
    variables: { userId },
  });

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  if (!data || !data.users.length) {
    return <Error statusCode={400} />;
  }

  return <UserEditPresenter userEditPageQuery={data} />;
};
