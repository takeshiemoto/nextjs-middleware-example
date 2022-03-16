import {
  first,
  withIPBlock,
  withMaintenanceMode,
} from '@nextjs-middleware-example/nextjs-middleware';

async function handler() {
  console.log('[handler]');
  return;
}

export const middleware = first(withMaintenanceMode, withIPBlock, handler);
