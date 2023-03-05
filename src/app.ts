import express,{Application, Request, Response} from 'express';
import { connectDB } from './config/db';
import movieRouter from './routes/movie.route'
import userRouter from './routes/user.route'
import bookRouter from './routes/book.route'
import loanRouter from './routes/loan.route'
const app:Application = express();
import * as dotenv from 'dotenv'
dotenv.config()
let port = process.env.PORT || 3003;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var multer = require('multer');
var upload = multer();
// for parsing multipart/form-data
app.use(upload.array()); 
// app.use(express.static('public'));

app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/loans', loanRouter);

app.listen(port,()=>console.log(`express started on port ${port}`));

