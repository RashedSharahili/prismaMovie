import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Book, BookGenre } from "@prisma/client";

// READ
export const getAllBooks = async (req:Request,res:Response)=>{
    let books = await prisma.book.findMany();
    res.json(books);
};

// CREATE
export const createBook = async (req:Request, res:Response) => {

    try {

        const c_book = req.body as Book

        await prisma.book.create({
            data: {
                name: c_book.name,
                genre: c_book.genre
            }
        });

        res.json({ message: "book created successfully" });

    } catch(err) {

        res.json(err);
    }

}