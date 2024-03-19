import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDb from './db.js';
import userRoute from './route/userRoute.js'

dotenv.config();
connectDb();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/user', userRoute);

app.listen(PORT, () => {
    console.log(`App Lisine On ${PORT}`);
})