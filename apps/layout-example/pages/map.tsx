import type { NextPageWithLayout } from '@nextjs-middleware-example/nextjs-utils';
import type { ReactElement } from 'react';

import { SubLayout } from '../components/SubLayout';

const Map: NextPageWithLayout = () => {
  return <div>Map Page</div>;
};

Map.getLayout = (page: ReactElement) => <SubLayout>{page}</SubLayout>;

export default Map;
