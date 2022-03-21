import { useUsersPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';

import { UsersPagePresenter } from './UsersPagePresenter';

export const UsersPageContainer = () => {
  const { data, loading, error } = useUsersPageQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  return <div>{data && <UsersPagePresenter usersPageQuery={data} />}</div>;
};
