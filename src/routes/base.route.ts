import { Router } from 'express';

import packegeJson from '../../package.json';

export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
  const { name, version, description, author } = packegeJson;

  res.status(200).json({ name, version, description, author });
});
