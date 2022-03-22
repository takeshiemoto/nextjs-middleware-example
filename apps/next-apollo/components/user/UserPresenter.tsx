import { UserPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Link from 'next/link';

type Props = {
  userPageQuery: UserPageQuery;
};

export const UserPresenter = (props: Props) => {
  const [user] = props.userPageQuery.users;

  return (
    <div>
      <h2>{user.name}</h2>
      <span>
        <Link href={{ pathname: `/users/${user.id}/edit` }}>edit</Link>
      </span>
      <div>
        <Link href={{ pathname: `/posts/add`, query: { userId: user.id } }}>
          Add post
        </Link>
      </div>
      <Link href={`/users/${user.id}/posts`}>posts</Link>
    </div>
  );
};
