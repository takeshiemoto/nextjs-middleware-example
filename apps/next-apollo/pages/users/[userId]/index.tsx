import { NextPage } from 'next';

import { UserContainer, UserParamsGuard } from '../../../components';

const User: NextPage = () => {
  return (
    <UserParamsGuard>
      <UserContainer />
    </UserParamsGuard>
  );
};

export default User;
