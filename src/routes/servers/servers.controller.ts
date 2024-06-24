import {Request, Response} from 'express';

import {ServerService} from '@services/server/server.service';
import {SERVERS} from '@data/servers';

export const findServers = async (_: Request, res: Response) => {
  try {
    const servers = await ServerService.findServer(SERVERS);
    return res.status(200).json(servers);
  } catch (error) {
    return res.status(400).json({
      message: error?.message || 'Something went wrong',
    });
  }
};
