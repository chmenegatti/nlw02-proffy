import express from 'express';
import cors from 'cors';
const path = require('path');
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);