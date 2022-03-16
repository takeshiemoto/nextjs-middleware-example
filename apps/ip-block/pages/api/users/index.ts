import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  return res.json({ message: 'Hello world' });
};

export default handler;
