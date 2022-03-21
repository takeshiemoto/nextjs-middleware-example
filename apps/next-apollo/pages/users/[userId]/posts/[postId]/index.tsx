import { NextPage } from 'next';

import {
  UserPostPageContainer,
  UserPostPageParamsProvider,
} from '../../../../../components';

const Post: NextPage = () => {
  return (
    <UserPostPageParamsProvider>
      <UserPostPageContainer />
    </UserPostPageParamsProvider>
  );
};

export default Post;
