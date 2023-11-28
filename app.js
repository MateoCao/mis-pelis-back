import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import { authRouter } from './routes/auth.js';
import { corsMiddleware } from './middlewares/cors.js';
import { favouriteMoviesRouter } from './routes/favouriteMovies.js';
import 'dotenv/config';

const app = express();
app.use(json());
app.disable('x-powered-by');
app.use(cookieParser());

app.use(corsMiddleware());

app.use('/favourite-movies', favouriteMoviesRouter);
app.use('/user', authRouter);

export default app;
