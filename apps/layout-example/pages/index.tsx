import type { NextPageWithLayout } from '@nextjs-middleware-example/nextjs-utils';
import type { ReactElement } from 'react';

import { BasicLayout } from '../components/BasicLayout';

const Index: NextPageWithLayout = () => {
  return <div>Index Page</div>;
};

Index.getLayout = (page: ReactElement) => <BasicLayout>{page}</BasicLayout>;

export default Index;
