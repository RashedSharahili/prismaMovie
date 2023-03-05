import { createBook, getAllBooks } from '../controllers/book.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createBookSchema } from '../schema.zod/book.zod';
let router = express.Router()

// read
router.get('/', getAllBooks);

// create 
router.post('/', validate(createBookSchema), createBook);

export default router;
