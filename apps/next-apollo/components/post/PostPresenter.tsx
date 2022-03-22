import { PostPageQuery } from '@nextjs-middleware-example/gql-hooks';

type Props = {
  postPageQuery: PostPageQuery;
};

export const PostPresenter = (props: Props) => {
  const [post] = props.postPageQuery.posts;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};
