import { GetServerSideProps, NextPage } from 'next';
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

export const getServerSideProps: GetServerSideProps<PageProps, Params> = async (
  context
) => {
  try {
    const params = context.params;

    const res = await fetch(`http://localhost:4200/api/users/${params.id}`);
    /** HTTPステータスが200-299以外 */
    if (!res.ok) {
      console.error(res.statusText);

      // リソースが存在しない
      if (res.status === 400) {
        return {
          notFound: true,
        };
      }

      // それ以外の謎エラー
      return {
        redirect: {
          permanent: false,
          destination: '/error',
        },
      };
    }

    const user = (await res.json()) as User;
    return {
      props: { user },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
    };
  }
};

export default User;
