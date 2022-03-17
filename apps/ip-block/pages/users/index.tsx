import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { User } from '../../types';
import { UserRepository } from '@nextjs-middleware-example/repository';

type PageProps = {
  users: User[];
};

const Users: NextPage<PageProps> = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>
                ID: {user.id} / {user.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  try {
    const users = await UserRepository.getUsers();
    return {
      props: { users },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Users;
