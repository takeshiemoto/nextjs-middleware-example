import { UserPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Link from 'next/link';

type Props = {
  userPageQuery: UserPageQuery;
};

export const UserPagePresenter = (props: Props) => {
  const [user] = props.userPageQuery.users;

  return (
    <div>
      <h2>{user.name}</h2>
      <Link href={`/users/${user.id}/posts`}>posts</Link>
    </div>
  );
};
