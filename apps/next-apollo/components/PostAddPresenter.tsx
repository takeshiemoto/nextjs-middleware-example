import {
  PostAddPageQuery,
  usePostAddMutation,
} from '@nextjs-middleware-example/gql-hooks';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useUserIdQuery } from './PostAddParamsGuard';

type FormType = {
  title: string;
  content: string;
  userId: number;
};

type Props = {
  postAddPageQuery: PostAddPageQuery;
};

const DEFAULT_USER_ID = 1;

export const PostAddPresenter = (props: Props) => {
  const router = useRouter();
  const userIdQuery = useUserIdQuery();

  const [mutation] = usePostAddMutation();

  const userId = userIdQuery?.userId || DEFAULT_USER_ID;

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: {
      title: '',
      content: '',
      userId,
    },
  });

  const submit = async (values: FormType) => {
    const res = await mutation({
      variables: {
        userId: values.userId,
        title: values.title,
        content: values.content,
      },
    });

    if (res.data) {
      await router.push(`/posts`);
      return;
    }

    if (res.errors) {
      alert(res.errors);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <select {...register('userId')}>
        {props.postAddPageQuery.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <div>
        <input type="text" {...register('title')} />
      </div>
      <div>
        <input type="text" {...register('content')} />
      </div>
      <div>
        <button type={'submit'}>Add</button>
      </div>
    </form>
  );
};
