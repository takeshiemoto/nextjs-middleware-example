import { withMaintenance } from '@nextjs-middleware-example/nextjs-middleware';

export const middleware = withMaintenance((req) => {
  console.log(req.ip);
  return new Response('My App');
});
