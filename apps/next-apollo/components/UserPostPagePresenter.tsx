import { UserPostPageQuery } from '@nextjs-middleware-example/gql-hooks';

type Props = {
  userPostPageQuery: UserPostPageQuery;
};

export const UserPostPagePresenter = (props: Props) => {
  const [post] = props.userPostPageQuery.posts;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
