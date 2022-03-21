import Link from 'next/link';

export function Index() {
  return (
    <div>
      <h2>Hi</h2>
      <Link href={'/users'}>
        <a>users</a>
      </Link>
    </div>
  );
}

export default Index;
