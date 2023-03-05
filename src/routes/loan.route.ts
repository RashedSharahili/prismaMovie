import { createLendBook, createLoan, getAllLoans, getLendedBooks } from '../controllers/loan.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createLoanSchema } from '../schema.zod/loan.zod';
let router = express.Router()

// read
router.get('/', getAllLoans);

// read lended books
router.get('/lendedBooks/:bookId', getLendedBooks);

// create 
router.post('/', validate(createLoanSchema), createLoan);

// create 
router.get('/lendBook/:userId/:bookId', createLendBook);


export default router;