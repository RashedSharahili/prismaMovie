import { createMovie, deleteMovie, getAllMovies, getMoviesByGenre, getMoviesByRating, getOneMovie, updateMovie } from '../controllers/movie.controller';
import express from 'express'
let router = express.Router()

// read
router.get('/', getAllMovies);

// read one movie
router.get('/:name', getOneMovie);

// read movies with specific genre
router.get('/movie_by_gente/:genre', getMoviesByGenre);

// read movies by rating
router.get('/movie_by_rating/:rating', getMoviesByRating);

// create 
router.post('/', createMovie)

// update 
router.put('/:id', updateMovie)

// delete
router.delete('/:id', deleteMovie)

export default router;