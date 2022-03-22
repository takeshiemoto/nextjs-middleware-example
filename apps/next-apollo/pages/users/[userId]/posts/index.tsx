import { NextPage } from 'next';

import {
  UserParamsGuard,
  UserPostsPageContainer,
} from '../../../../components';

const Posts: NextPage = () => {
  return (
    <UserParamsGuard>
      <UserPostsPageContainer />
    </UserParamsGuard>
  );
};

export default Posts;
