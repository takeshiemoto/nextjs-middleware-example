import {
  UserEditPageQuery,
  useUserEditMutation,
} from '@nextjs-middleware-example/gql-hooks';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

type FormType = {
  name: string;
};

type Props = {
  userEditPageQuery: UserEditPageQuery;
};

export const UserEditPresenter = (props: Props) => {
  const router = useRouter();

  const [mutation] = useUserEditMutation();

  const [user] = props.userEditPageQuery.users;

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: { name: user.name },
  });

  const submit = async (values: FormType) => {
    const res = await mutation({
      variables: { id: user.id, name: values.name },
    });

    if (res.errors) {
      alert(res.errors);
      return;
    }

    if (res.data) {
      await router.push('/users');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" {...register('name')} />
      <button type={'submit'}>Edit</button>
    </form>
  );
};
