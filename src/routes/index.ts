import {Express} from 'express';

import {serversRouter} from './servers/servers.router';

function routes(app: Express) {
  app.use('/api/servers', serversRouter);
}

export {routes};
