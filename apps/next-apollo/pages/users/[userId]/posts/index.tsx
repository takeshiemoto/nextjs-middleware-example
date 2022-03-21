import { NextPage } from 'next';

import {
  UserPostsPageContainer,
  UserPostsPageParamsProvider,
} from '../../../../components';

const Posts: NextPage = () => {
  return (
    <UserPostsPageParamsProvider>
      <UserPostsPageContainer />
    </UserPostsPageParamsProvider>
  );
};

export default Posts;
