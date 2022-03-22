import { NextPage } from 'next';

import { UserEditContainer, UserParamsGuard } from '../../../components';

const UserEdit: NextPage = () => {
  return (
    <UserParamsGuard>
      <UserEditContainer />
    </UserParamsGuard>
  );
};

export default UserEdit;
