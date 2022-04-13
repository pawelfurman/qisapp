import * as express from 'express';
import * as cors from 'cors';
import { createMiddleware } from '@mswjs/http-middleware'
import { handlers } from './mocks/handlers';

const app = express();
app.use(cors());
app.use(createMiddleware(...handlers));

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);