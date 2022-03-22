import { usePostAddMutation } from '@nextjs-middleware-example/gql-hooks';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { useUserParams } from './UserParamsGuard';

type FormType = {
  title: string;
  content: string;
};

export const UserPostAddPagePresenter = () => {
  const router = useRouter();
  const { userId } = useUserParams();
  const [mutation] = usePostAddMutation();

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: { title: '', content: '' },
  });

  const submit = async (values: FormType) => {
    const res = await mutation({
      variables: {
        userId,
        title: values.title,
        content: values.content,
      },
    });

    if (res.data) {
      await router.push(`/users/${userId}/posts`);
      return;
    }

    if (res.errors) {
      alert(res.errors);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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
