import { NextPage } from 'next';

import { PostContainer, PostParamsGuard } from '../../../components';

const Post: NextPage = () => {
  return (
    <PostParamsGuard>
      <PostContainer />
    </PostParamsGuard>
  );
};

export default Post;
