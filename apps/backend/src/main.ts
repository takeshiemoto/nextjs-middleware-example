/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

/**
 * Data
 */
const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Paul' },
  { id: 3, name: 'George' },
  { id: 4, name: 'Ringo' },
];

app.get('/api/users', (req, res) => {
  res.send(data);
});

app.get(
  '/api/users/:id',
  (req: express.Request<{ id: string }>, res: express.Response) => {
    const id = Number(req.params.id);
    const user = data.find((d) => d.id === id);

    if (!user) {
      res.status(StatusCodes.NOT_FOUND).end();
      return;
    }

    res.send(user);
  }
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
