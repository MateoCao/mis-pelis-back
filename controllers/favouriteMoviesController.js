import { FavouriteMoviesModel } from '../modules/favouriteMovies.js';
import { validateFavouriteMovie } from '../validations/moviesValidationSchema.js';

export class FavouriteMoviesController {
  static async getAll (req, res) {
    try {
      const id = req.user.id;
      const favouriteMovies = await FavouriteMoviesModel.getAll({ userId: id });
      res.json(favouriteMovies);
    } catch (error) {
      console.error('Error in getAll:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async add (req, res) {
    try {
      const result = validateFavouriteMovie(req.body);
      console.log('USUARIO', req.user);
      const userId = req.user.id;

      if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
      }

      const newMovie = await FavouriteMoviesModel.add({ movie: result.data, user: userId });
      console.log(newMovie);

      res.status(201).json(newMovie);
    } catch (error) {
      console.error('Error in create:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async delete (req, res) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const deletedMovie = await FavouriteMoviesModel.delete({ id });

      if (!deletedMovie) return res.status(404).json({ error: 'Tarea no encontrada' });

      return res.sendStatus(204);
    } catch (error) {
      console.error('Error in delete:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
