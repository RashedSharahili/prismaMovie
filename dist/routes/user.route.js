"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
// read
router.get('/', user_controller_1.getAllUsers);
// read user by id
router.get('/userById/:id', user_controller_1.getUserById);
// read user by email
router.get('/userByEmail/:email', user_controller_1.getUserByEmail);
// read user by age
router.get('/userByAge/:age', user_controller_1.getUserByAge);
// read user by role
router.get('/userByRole/:role', user_controller_1.getUserByRole);
// read check user creadintals
router.get('/userCreadintals/:username/:password', user_controller_1.login);
// read chenge user password
router.get('/userCreadintals/:password/:userId', user_controller_1.resetUserPassword);
// read user by joiningyear
router.get('/userByJoiningyear/:joiningYear/:userId', user_controller_1.getUserByJoiningYear);
// read users by joiningyear
router.get('/usersByJoiningyear/:joiningYear', user_controller_1.getUsersByJoiningYear);
// create
router.post('/', user_controller_1.createUser);
exports.default = router;
