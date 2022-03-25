import { ReactNode, useState } from 'react';

import { Nav } from './Nav';

type Props = {
  children: ReactNode;
};
export const SubLayout = ({ children }: Props) => {
  const [state, setState] = useState<'open' | 'close'>('open');

  return (
    <div>
      <Nav />
      <p>State: {state}</p>
      <button onClick={() => setState('open')}>open</button>
      <button onClick={() => setState('close')}>close</button>
      <h1>SubLayout</h1>
      {children}
    </div>
  );
};
