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
exports.createBook = exports.getAllBooks = void 0;
const db_1 = require("../config/db");
// READ
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let books = yield db_1.prisma.book.findMany();
    res.json(books);
});
exports.getAllBooks = getAllBooks;
// CREATE
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const c_book = req.body;
        yield db_1.prisma.book.create({
            data: {
                name: c_book.name,
                genre: c_book.genre
            }
        });
        res.json({ message: "book created successfully" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.createBook = createBook;
