import express from 'express';

import {routes} from './routes';

const app = express();
app.use(express.json());

app.get('/', async (req, res, next) => {
  return res.status(200).json({
    message: 'Servers',
  });
});

routes(app);

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

export {app};
