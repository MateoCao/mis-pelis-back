import { Router } from 'express';
import { FavouriteMoviesController } from '../controllers/favouriteMoviesController.js';
import { authRequired } from '../middlewares/validateToken.js';
export const favouriteMoviesRouter = Router();

favouriteMoviesRouter.get('/', authRequired, FavouriteMoviesController.getAll);
favouriteMoviesRouter.post('/add', authRequired, FavouriteMoviesController.add);
favouriteMoviesRouter.delete('/remove/:id', authRequired, FavouriteMoviesController.delete);
