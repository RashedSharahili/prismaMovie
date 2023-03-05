"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_controller_1 = require("../controllers/book.controller");
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
// read
router.get('/', book_controller_1.getAllBooks);
// create 
router.post('/', book_controller_1.createBook);
exports.default = router;
