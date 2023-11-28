import z from 'zod';

export const moviesSchema = z.object({
  id: z.number({
    required_error: 'Must have an id'
  }).min('1', {
    message: 'Must have at least 1 characters'
  }),
  title: z.string({
    required_error: 'Must have a title'
  }).min('1', {
    message: 'Must have at least 1 characters'
  }).max('100', {
    message: 'Must have at most 100 characters'
  }),
  overview: z.string({
    required_error: 'Must have a description'
  }).min('3', {
    message: 'Must have at least 3 characters'
  }),
  backdrop: z.string({
    required_error: 'Must have a backdrop image'
  })
});

export function validateFavouriteMovie (movie) {
  return moviesSchema.safeParse(movie);
}
