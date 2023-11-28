import { FavouriteMovie } from '../models/favouriteMovieSchema.js';

export class FavouriteMoviesModel {
  static async getAll ({ userId }) {
    try {
      return FavouriteMovie.find({
        user: userId
      }).populate('user');
    } catch (error) {
      console.error('Error in FavouriteMovie.getAll:', error);
      throw new Error('Internal Server Error');
    }
  }

  static async add ({ movie, user }) {
    console.log('id en model', user);
    try {
      const newMovie = new FavouriteMovie({
        ...movie,
        user
      });

      await newMovie.save();
      return newMovie;
    } catch (error) {
      console.error('Error in FavouriteMovie.create:', error);
      throw new Error('Internal Server Error');
    }
  }

  static async delete ({ id }) {
    try {
      const deletedMovie = await FavouriteMovie.findByIdAndDelete({ _id: id });

      return deletedMovie;
    } catch (error) {
      console.error('Error in FavouriteMovie.delete:', error);
      throw new Error('Internal Server Error');
    }
  }
}
