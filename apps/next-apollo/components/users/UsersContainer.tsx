import { useUsersPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { UsersPresenter } from './UsersPresenter';

export const UsersContainer = () => {
  const { data, loading, error } = useUsersPageQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  return <div>{data && <UsersPresenter usersPageQuery={data} />}</div>;
};
