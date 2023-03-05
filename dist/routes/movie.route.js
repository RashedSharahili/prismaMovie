"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_controller_1 = require("../controllers/movie.controller");
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
// read
router.get('/', movie_controller_1.getAllMovies);
// read one movie
router.get('/:name', movie_controller_1.getOneMovie);
// read movies with specific genre
router.get('/movie_by_gente/:genre', movie_controller_1.getMoviesByGenre);
// read movies by rating
router.get('/movie_by_rating/:rating', movie_controller_1.getMoviesByRating);
// create 
router.post('/', movie_controller_1.createMovie);
// update 
router.put('/:id', movie_controller_1.updateMovie);
// delete
router.delete('/:id', movie_controller_1.deleteMovie);
exports.default = router;
