import { NextPage } from 'next';

import {
  UserPostPageContainer,
  UserPostParamsGuard,
} from '../../../../../components';

const Post: NextPage = () => {
  return (
    <UserPostParamsGuard>
      <UserPostPageContainer />
    </UserPostParamsGuard>
  );
};

export default Post;
