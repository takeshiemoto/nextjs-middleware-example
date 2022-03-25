import type { NextPageWithLayout } from '@nextjs-middleware-example/nextjs-utils';
import type { ReactElement } from 'react';

import { BasicLayout } from '../components/BasicLayout';

const Profile: NextPageWithLayout = () => {
  return <div>Profile Page</div>;
};

Profile.getLayout = (page: ReactElement) => <BasicLayout>{page}</BasicLayout>;

export default Profile;
