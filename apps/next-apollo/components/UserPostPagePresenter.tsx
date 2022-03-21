import { UserPostPageQuery } from '@nextjs-middleware-example/gql-hooks';

type Props = {
  userPostPageQuery: UserPostPageQuery;
};

export const UserPostPagePresenter = (props: Props) => {
  return (
    <div>
      <h2>{props.userPostPageQuery.posts[0].title}</h2>
      <p>{props.userPostPageQuery.posts[0].content}</p>
    </div>
  );
};
