"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.getMoviesByRating = exports.getMoviesByGenre = exports.getOneMovie = exports.getAllMovies = void 0;
const db_1 = require("../config/db");
// READ
const getAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let movies = yield db_1.prisma.movie.findMany();
    res.json(movies);
});
exports.getAllMovies = getAllMovies;
// READ ONE MOVIE
const getOneMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    try {
        let movie = yield db_1.prisma.movie.findFirst({
            where: {
                name: name
            }
        });
        res.json(movie);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getOneMovie = getOneMovie;
// READ MOVIES BY GENRE
const getMoviesByGenre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { genre } = req.params;
    try {
        let movies = yield db_1.prisma.movie.findMany({
            where: {
                genre: genre
            }
        });
        res.json(movies);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getMoviesByGenre = getMoviesByGenre;
// READ MOVIES GREATER THAN RATING
const getMoviesByRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating } = req.params;
    try {
        let movies = yield db_1.prisma.movie.findMany({
            where: {
                rating: {
                    gt: parseInt(rating)
                }
            }
        });
        res.json(movies);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getMoviesByRating = getMoviesByRating;
// CREATE
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const c_movie = req.body;
    if (c_movie.name.length < 3) {
        res.json({ message: "movie Length less than 3" });
    }
    else if (c_movie.genre == "") {
        res.json({ message: "you should enter genre" });
    }
    else if (parseInt(c_movie.rating) > 5 || c_movie.rating == "") {
        res.json({ message: "rating should between 0 and 5" });
    }
    else if (c_movie.duration == "" || parseInt(c_movie.duration) < 60) {
        res.json({ message: "duration should be more than 60" });
    }
    else {
        let movie = yield db_1.prisma.movie.create({
            data: {
                name: c_movie.name,
                genre: c_movie.genre,
                rating: parseInt(c_movie.rating),
                duration: parseInt(c_movie.duration)
            }
        });
        res.json({ message: "movie created successfully" });
    }
});
exports.createMovie = createMovie;
// UPDATE
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const u_movie = req.body;
    if (u_movie.name.length < 3) {
        res.json({ message: "movie Length less than 3" });
    }
    else if (u_movie.genre == "") {
        res.json({ message: "you should enter genre" });
    }
    else if (parseInt(u_movie.rating) > 5 || u_movie.rating == "") {
        res.json({ message: "rating should between 0 and 5" });
    }
    else if (u_movie.duration == "" || parseInt(u_movie.duration) < 60) {
        res.json({ message: "duration should be more than 60" });
    }
    else {
        let movie = yield db_1.prisma.movie.update({
            where: {
                id: id
            },
            data: {
                name: u_movie.name,
                genre: u_movie.genre,
                rating: parseInt(u_movie.rating),
                duration: parseInt(u_movie.duration)
            }
        });
        res.json({ message: "movie updated successfully" });
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let movie = yield db_1.prisma.movie.delete({
        where: {
            id: id
        }
    });
    res.json({ message: "movie deleted successfully" });
});
exports.deleteMovie = deleteMovie;
