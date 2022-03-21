import { NextPage } from 'next';

import { UserPageContainer, UserPageParamsProvider } from '../../../components';

const User: NextPage = () => {
  return (
    <UserPageParamsProvider>
      <UserPageContainer />
    </UserPageParamsProvider>
  );
};

export default User;
