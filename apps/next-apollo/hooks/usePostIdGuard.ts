import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type State = {
  loading: boolean;
  postId: number | undefined;
};

export const usePostIdGuard = () => {
  const router = useRouter();
  const [state, setState] = useState<State>({
    loading: true,
    postId: undefined,
  });

  useEffect(() => {
    if (router.isReady) {
      const postId = Number(router.query['postId']);

      if (!postId) {
        router.push('/404');

        return;
      }

      setState({ loading: false, postId });
    }
  }, [router, router.isReady, router.query]);

  return state;
};
