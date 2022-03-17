import { withError } from '@nextjs-middleware-example/nextjs-utils';
import { UserRepository } from '@nextjs-middleware-example/repository';
import { NextPage } from 'next';

import { User } from '../../types';

type PageProps = {
  user: User;
};

type Params = {
  id: string;
};

const User: NextPage<PageProps> = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export const getServerSideProps = withError<PageProps, Params>(
  async (context) => {
    if (context.params?.id) {
      const user = await UserRepository.getUserById(Number(context.params.id));
      return {
        props: {
          user,
        },
      };
    }

    return {
      notFound: true,
    };
  }
);

export default User;
