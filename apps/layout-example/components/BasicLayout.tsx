import { ReactNode, useState } from 'react';

import { Nav } from './Nav';

type Props = {
  children: ReactNode;
};
export const BasicLayout = ({ children }: Props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Nav />
      <h1>Basic Layout</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      {children}
    </div>
  );
};
