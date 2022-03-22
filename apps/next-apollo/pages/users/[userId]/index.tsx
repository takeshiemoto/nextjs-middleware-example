import { NextPage } from 'next';

import { UserPageContainer, UserParamsGuard } from '../../../components';

const User: NextPage = () => {
  return (
    <UserParamsGuard>
      <UserPageContainer />
    </UserParamsGuard>
  );
};

export default User;
