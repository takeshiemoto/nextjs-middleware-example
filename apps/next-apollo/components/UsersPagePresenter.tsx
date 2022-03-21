import { UsersPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Link from 'next/link';

type Props = {
  usersPageQuery: UsersPageQuery;
};

export const UsersPagePresenter = (props: Props) => {
  return (
    <div>
      <Link href={`/users/add`}>Add user</Link>
      <ul>
        {props.usersPageQuery.users.map((u) => (
          <li key={u.id}>
            <Link href={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
