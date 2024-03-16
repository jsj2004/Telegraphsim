import express from 'express';
import route from './routes/route.js';
import connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use('/',route);

connection();

app.listen(PORT,() => console.log(`Server is running successfully in ${PORT}`));
