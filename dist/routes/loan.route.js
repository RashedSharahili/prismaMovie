"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loan_controller_1 = require("../controllers/loan.controller");
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
// read
router.get('/', loan_controller_1.getAllLoans);
// read lended books
router.get('/lendedBooks/:bookId', loan_controller_1.getLendedBooks);
// create 
router.post('/', loan_controller_1.createLoan);
// create 
router.get('/lendBook/:userId/:bookId', loan_controller_1.createLendBook);
exports.default = router;
