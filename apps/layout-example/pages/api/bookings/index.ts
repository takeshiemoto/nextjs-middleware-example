import { withOptions } from '@nextjs-middleware-example/nextjs-utils';

export default withOptions<{ message: string }>((req, res) => {
  res.send({ message: 'hello world' });
});
