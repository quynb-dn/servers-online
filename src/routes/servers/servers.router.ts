import express from 'express';

import {findServers} from './servers.controller';

const serversRouter = express.Router();

serversRouter.get('/', findServers);

export {serversRouter};
