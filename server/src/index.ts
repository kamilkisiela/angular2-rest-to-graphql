import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';

import REST from './api/rest';
import GraphQL from './api/graphql';

const app = express();
const PORT = 4000;
const router = express.Router();

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static assets
app.use('/static', express.static(path.resolve(__dirname, '../public')));

// Add REST
app.use('/api', REST);

// Add GraphQL
GraphQL(app);

app.listen(PORT, () => console.log(
  `API Server is now running on http://localhost:${PORT}`
));