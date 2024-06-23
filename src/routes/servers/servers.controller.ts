import {Request, Response} from 'express';

import {ServerService} from '@services/server/server.service';
import {SERVERS} from '@data/servers';

export const findServers = async (_: Request, res: Response) => {
  const servers = await ServerService.findServer(SERVERS);

  return res.status(200).json(servers);
};
