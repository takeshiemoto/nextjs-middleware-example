import type { NextPageWithLayout } from '@nextjs-middleware-example/nextjs-utils';
import type { ReactElement } from 'react';

import { SubLayout } from '../components/SubLayout';

const About: NextPageWithLayout = () => {
  return <div>About Page</div>;
};

About.getLayout = (page: ReactElement) => <SubLayout>{page}</SubLayout>;

export default About;
