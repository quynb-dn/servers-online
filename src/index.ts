import 'dotenv/config';
import {app} from './app';

const PORT = process.env.PORT || 3000;

const start = async () => {
  console.log('Starting up...');
};

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

start();
