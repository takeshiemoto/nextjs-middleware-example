import { NextPage } from 'next';
import { User } from '../../types';
import { UserRepository } from '../../repositories';
import { withError } from '@nextjs-middleware-example/nextjs-utils';

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
