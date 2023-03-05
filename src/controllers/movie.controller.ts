import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Genre } from "@prisma/client";

// READ
export const getAllMovies = async (req:Request,res:Response)=>{
    let movies = await prisma.movie.findMany();
    res.json(movies);
};

// READ ONE MOVIE
export const getOneMovie = async (req:Request,res:Response)=>{
    
    const { name } = req.params

    try {

        let movie = await prisma.movie.findFirst({
            where: {
    
                name: name
            }
        });
        res.json(movie);

    } catch(err) {

        res.json(err);

    }
};

// READ MOVIES BY GENRE
export const getMoviesByGenre = async (req:Request,res:Response)=>{
    
    const { genre } = req.params

    try {

        let movies = await prisma.movie.findMany({
            where: {
    
                genre: genre as Genre
            }
        });
        res.json(movies);

    } catch(err) {

        res.json(err);

    }
};

// READ MOVIES GREATER THAN RATING
export const getMoviesByRating = async (req:Request,res:Response)=>{
    
    const { rating } = req.params

    try {

        let movies = await prisma.movie.findMany({
            where: {
    
                rating: {
                    gt: parseInt(rating)
                }
            }
        });
        res.json(movies);

    } catch(err) {

        res.json(err);

    }
};

// CREATE
export const createMovie = async(req:Request, res:Response) => {

    const c_movie = req.body

    if(c_movie.name.length < 3) {

        res.json({ message: "movie Length less than 3" })

    } else if(c_movie.genre == "") {

        res.json({ message: "you should enter genre" });

    } else if(parseInt(c_movie.rating) > 5 || c_movie.rating == "") {

        res.json({ message: "rating should between 0 and 5" });

    } else if(c_movie.duration == "" || parseInt(c_movie.duration) < 60) {

        res.json({ message: "duration should be more than 60" });

    } else {

        let movie = await prisma.movie.create({
            data: {
                name: c_movie.name,
                genre: c_movie.genre,
                rating: parseInt(c_movie.rating),
                duration: parseInt(c_movie.duration)
            }
        });

        res.json({ message: "movie created successfully" });

    }
}

// UPDATE
export const updateMovie = async(req:Request, res:Response) => {
    
    const { id } = req.params

    const u_movie = req.body

    if(u_movie.name.length < 3) {

        res.json({ message: "movie Length less than 3" })

    } else if(u_movie.genre == "") {

        res.json({ message: "you should enter genre" });

    } else if(parseInt(u_movie.rating) > 5 || u_movie.rating == "") {

        res.json({ message: "rating should between 0 and 5" });

    } else if(u_movie.duration == "" || parseInt(u_movie.duration) < 60) {

        res.json({ message: "duration should be more than 60" });

    } else {

        let movie = await prisma.movie.update({
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
}

export const deleteMovie = async (req:Request, res:Response) => {

    const { id } = req.params

    let movie = await prisma.movie.delete({

        where: {
            id: id
        }
    });

    res.json({ message: "movie deleted successfully" });
}