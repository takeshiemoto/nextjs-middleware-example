import { usePostsPageQuery } from '@nextjs-middleware-example/gql-hooks';
import Error from 'next/error';
import Link from 'next/link';

export const PostsContainer = () => {
  const { data, loading, error } = usePostsPageQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error statusCode={500} />;
  }

  return (
    <div>
      <ul>
        {data &&
          data.posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
