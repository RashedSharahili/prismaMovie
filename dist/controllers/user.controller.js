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
exports.createUser = exports.getUsersByJoiningYear = exports.getUserByJoiningYear = exports.resetUserPassword = exports.login = exports.getUserByRole = exports.getUserByAge = exports.getUserByEmail = exports.getUserById = exports.getAllUsers = void 0;
const db_1 = require("../config/db");
// READ
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield db_1.prisma.user.findMany();
    res.json(users);
});
exports.getAllUsers = getAllUsers;
// READ USER BY ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let user = yield db_1.prisma.user.findFirst({
            where: {
                id: id
            }
        });
        res.json(user);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUserById = getUserById;
// READ USER BY EMAIL
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    try {
        let user = yield db_1.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        res.json(user);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUserByEmail = getUserByEmail;
// READ USER GREATER THAN AGE
const getUserByAge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { age } = req.params;
    try {
        let users = yield db_1.prisma.user.findMany({
            where: {
                age: {
                    gt: parseInt(age)
                }
            }
        });
        res.json(users);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUserByAge = getUserByAge;
// READ USER BY ROLE
const getUserByRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.params;
    try {
        let users = yield db_1.prisma.user.count({
            where: {
                role: role
            }
        });
        res.json(users);
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUserByRole = getUserByRole;
// READ USER CREADINTALS
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.params;
    try {
        let user = yield db_1.prisma.user.findFirst({
            where: {
                username: username,
                password: parseInt(password)
            }
        });
        if (!user) {
            res.json({ message: "Invalid Creadintals" });
        }
        else {
            res.json({ message: `Welcome Back ${username}` });
        }
    }
    catch (err) {
        res.json(err);
    }
});
exports.login = login;
// READ CHANGE USER PASSWORD
const resetUserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, userId } = req.params;
    try {
        let user = yield db_1.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                password: parseInt(password)
            }
        });
        if (!user) {
            res.json({ message: "Invalid user id" });
        }
        else {
            res.json({ message: `password changed to ${password} for user id ${userId}` });
        }
    }
    catch (err) {
        res.json(err);
    }
});
exports.resetUserPassword = resetUserPassword;
// READ USER BY JOININGYEAR
const getUserByJoiningYear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { joiningYear, userId } = req.params;
    try {
        let user = yield db_1.prisma.user.findFirst({
            where: {
                joiningYear: joiningYear,
                id: userId
            }
        });
        if (!user) {
            res.json({ message: "User not joining with this date" });
        }
        else {
            res.json({ message: `User joining with this date` });
        }
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUserByJoiningYear = getUserByJoiningYear;
// READ USERS BY JOININGYEAR
const getUsersByJoiningYear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { joiningYear } = req.params;
    try {
        let users = yield db_1.prisma.user.findMany({
            where: {
                joiningYear: {
                    gt: joiningYear
                }
            }
        });
        if (!users) {
            res.json({ message: "there are no users" });
        }
        else {
            res.json(users);
        }
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUsersByJoiningYear = getUsersByJoiningYear;
// CREATE
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const c_user = req.body;
        yield db_1.prisma.user.create({
            data: {
                username: c_user.username,
                password: c_user.password,
                email: c_user.email,
                joiningYear: c_user.joiningYear,
                age: c_user.age
            }
        });
        res.json({ message: "user created successfully" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.createUser = createUser;
