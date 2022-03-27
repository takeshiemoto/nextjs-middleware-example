import Link from 'next/link';

export function Index() {
  return (
    <div>
      <h2>Hi</h2>
      <ul>
        <li>
          <Link href={'/users'}>
            <a>users</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts'}>
            <a>posts</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
