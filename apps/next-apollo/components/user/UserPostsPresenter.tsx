import { UserPostsPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Link from 'next/link';

type Props = {
  userPostsPageQuery: UserPostsPageQuery;
};

export const UserPostsPresenter = (props: Props) => {
  const [user] = props.userPostsPageQuery.users;

  return (
    <div>
      <p>{user.name}`s posts</p>
      <ul>
        {user.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
