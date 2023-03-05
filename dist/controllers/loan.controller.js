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
exports.createLendBook = exports.createLoan = exports.getLendedBooks = exports.getAllLoans = void 0;
const db_1 = require("../config/db");
// READ
const getAllLoans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let loans = yield db_1.prisma.loan.findMany();
    res.json(loans);
});
exports.getAllLoans = getAllLoans;
// READ
const getLendedBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    let loans = yield db_1.prisma.loan.findMany({
        where: {
            bookId: bookId
        },
        include: {
            user: true
        }
    });
    if (!loans) {
        res.json({ message: "book id not found" });
    }
    else {
        res.json(loans);
    }
});
exports.getLendedBooks = getLendedBooks;
// CREATE
const createLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const c_loan = req.body;
        yield db_1.prisma.loan.create({
            data: {
                userId: c_loan.userId,
                bookId: c_loan.bookId
            }
        });
        res.json({ message: "loan created successfully" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.createLoan = createLoan;
// CREATE
const createLendBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bookId } = req.params;
        let lendBook = yield db_1.prisma.loan.create({
            data: {
                userId: userId,
                bookId: bookId
            }
        });
        if (!lendBook) {
            res.json({ message: "user id not found" });
        }
        else {
            res.json({ message: "loan created successfully" });
        }
    }
    catch (err) {
        res.json(err);
    }
});
exports.createLendBook = createLendBook;
