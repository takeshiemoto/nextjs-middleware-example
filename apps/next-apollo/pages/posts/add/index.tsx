import { NextPage } from 'next';

import { PostAddContainer, PostAddParamsGuard } from '../../../components';

const PostsAdd: NextPage = () => {
  return (
    <PostAddParamsGuard>
      <PostAddContainer />
    </PostAddParamsGuard>
  );
};

export default PostsAdd;
