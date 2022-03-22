import { NextPage } from 'next';
import Link from 'next/link';

const UsersPostsComplete: NextPage = () => {
  return (
    <div>
      User Add Complete!!
      <Link href={'/users'}>to back</Link>
    </div>
  );
};

export default UsersPostsComplete;
