import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const SafeHydrate = ({ children }: Props) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};
