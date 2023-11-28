import mongoose from 'mongoose';

export const favouriteMovieSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  backdrop: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const FavouriteMovie = mongoose.model('favouriteMovie', favouriteMovieSchema);

export { FavouriteMovie };
