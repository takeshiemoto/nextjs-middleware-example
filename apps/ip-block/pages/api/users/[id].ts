import { NextApiHandler } from 'next';
import { User } from '../../../types';

type ApiResponse = {
  user?: User;
};

const handler: NextApiHandler<ApiResponse> = (req, res) => {
  return res.status(200).json({
    user: { id: 1, name: 'Paul' },
  });
};

export default handler;
