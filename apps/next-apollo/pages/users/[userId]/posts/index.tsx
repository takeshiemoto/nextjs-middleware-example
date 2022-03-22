import { NextPage } from 'next';

import { UserParamsGuard, UserPostsContainer } from '../../../../components';

const Posts: NextPage = () => {
  return (
    <UserParamsGuard>
      <UserPostsContainer />
    </UserParamsGuard>
  );
};

export default Posts;
