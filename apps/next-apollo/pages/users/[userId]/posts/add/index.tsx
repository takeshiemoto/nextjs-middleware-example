import { NextPage } from 'next';

import {
  UserParamsGuard,
  UserPostAddPageContainer,
} from '../../../../../components';

const UserPostsAdd: NextPage = () => {
  return (
    <UserParamsGuard>
      <UserPostAddPageContainer />
    </UserParamsGuard>
  );
};

export default UserPostsAdd;
