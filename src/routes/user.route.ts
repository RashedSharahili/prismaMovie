import { createUser, getAllUsers, getUserByAge, getUserByEmail, getUserById, getUserByJoiningYear, getUserByRole, getUsersByJoiningYear, login, resetUserPassword } from '../controllers/user.controller';
import express from 'express'
import validate from '../middleware/vialdate'
import { createUserSchema } from '../schema.zod/user.zod';
let router = express.Router()

// read
router.get('/', getAllUsers);

// read user by id
router.get('/userById/:id', getUserById);

// read user by email
router.get('/userByEmail/:email', getUserByEmail);

// read user by age
router.get('/userByAge/:age', getUserByAge);

// read user by role
router.get('/userByRole/:role', getUserByRole);

// read check user creadintals
router.get('/userCreadintals/:username/:password', login);

// read chenge user password
router.get('/userCreadintals/:password/:userId', resetUserPassword);

// read user by joiningyear
router.get('/userByJoiningyear/:joiningYear/:userId', getUserByJoiningYear);

// read users by joiningyear
router.get('/usersByJoiningyear/:joiningYear', getUsersByJoiningYear);

// create
router.post('/', validate(createUserSchema), createUser);

export default router;