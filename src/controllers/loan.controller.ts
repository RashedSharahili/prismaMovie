import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Loan } from "@prisma/client";

// READ
export const getAllLoans = async (req:Request,res:Response)=>{
    let loans = await prisma.loan.findMany();
    res.json(loans);
};

// READ
export const getLendedBooks = async (req:Request,res:Response)=>{
    
    const { bookId } = req.params

    let loans = await prisma.loan.findMany({
        where: {
            bookId: bookId
        },
        include: {
            user: true
        }
    });

    if(!loans) {

        res.json({ message: "book id not found" });

    } else {
        
        res.json(loans);
    }

};

// CREATE
export const createLoan = async (req:Request, res:Response) => {

    try {

        const c_loan = req.body as Loan

        await prisma.loan.create({
            data: {
                userId: c_loan.userId,
                bookId: c_loan.bookId
            }
        });

        res.json({ message: "loan created successfully" });

    } catch(err) {

        res.json(err);
    }

}

// CREATE
export const createLendBook = async (req:Request, res:Response) => {

    try {

        const { userId, bookId } = req.params

        let lendBook = await prisma.loan.create({
            data: {
                userId: userId,
                bookId: bookId
            }
        });

        if(!lendBook) {

            res.json({ message: "user id not found" });

        } else {

            res.json({ message: "loan created successfully" });
        }

    } catch(err) {

        res.json(err);
    }

}
