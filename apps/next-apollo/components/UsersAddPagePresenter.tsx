import { useUsersAddMutation } from '@nextjs-middleware-example/gql-hooks';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

type FormType = {
  name: string;
};

export const UsersAddPagePresenter = () => {
  const router = useRouter();

  const [mutation] = useUsersAddMutation();

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: { name: '' },
  });

  const submit = async (values: FormType) => {
    const res = await mutation({ variables: { name: values.name } });

    if (res.errors) {
      alert(res.errors);
      return;
    }

    if (res.data) {
      await router.push('/users/add/complete');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" {...register('name')} />
      <button type={'submit'}>Add</button>
    </form>
  );
};
