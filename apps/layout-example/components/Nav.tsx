import Link from 'next/link';

export const Nav = () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Link href={'/'}>Index</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/map'}>map</Link>
    </div>
  );
};
