import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Role, User } from "@prisma/client";

// READ
export const getAllUsers = async (req:Request,res:Response)=>{
    let users = await prisma.user.findMany();
    res.json(users);
};

// READ USER BY ID
export const getUserById = async (req:Request,res:Response)=>{

    const { id } = req.params

    try {

        let user = await prisma.user.findFirst({

            where: {
                id: id
            }
        });

        res.json(user);

    } catch(err) {

        res.json(err);
    }
};

// READ USER BY EMAIL
export const getUserByEmail = async (req:Request,res:Response)=>{

    const { email } = req.params

    try {

        let user = await prisma.user.findFirst({

            where: {
                email: email
            }
        });

        res.json(user);

    } catch(err) {

        res.json(err);
    }
};

// READ USER GREATER THAN AGE
export const getUserByAge = async (req:Request,res:Response)=>{

    const { age } = req.params

    try {

        let users = await prisma.user.findMany({

            where: {
                age: {
                    gte: parseInt(age)
                }
            }
        });

        res.json(users);

    } catch(err) {

        res.json(err);
    }
};

// READ USER BY ROLE
export const getUserByRole = async (req:Request,res:Response)=>{

    const { role } = req.params

    try {

        let users = await prisma.user.count({

            where: {
                role: role as Role
            }
        });

        res.json(users);

    } catch(err) {

        res.json(err);
    }
};

// READ USER CREADINTALS
export const login = async (req:Request, res: Response) => {

    const { username, password } = req.params
    
    try {

        let user = await prisma.user.findFirst({
            where: {
                username: username,
                password: parseInt(password)
            }
        });

        if(!user) {

            res.json({ message: "Invalid Creadintals" });

        } else {

            res.json({ message: `Welcome Back ${username}` });
        }

    } catch(err) {

        res.json(err)
    }
}

// READ CHANGE USER PASSWORD
export const resetUserPassword = async (req:Request, res: Response) => {

    const { password, userId } = req.params
    
    try {

        let user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                password: parseInt(password)
            }
        });

        if(!user) {

            res.json({ message: "Invalid user id" });

        } else {

            res.json({ message: `password changed to ${password} for user id ${userId}` });
        }

    } catch(err) {

        res.json(err)
    }
}

// READ USER BY JOININGYEAR
export const getUserByJoiningYear = async (req:Request, res: Response) => {

    const { joiningYear, userId } = req.params
    
    try {

        let user = await prisma.user.findFirst({
            where: {
                joiningYear: joiningYear,
                id: userId
            }
        });

        if(!user) {

            res.json({ message: "User not joining with this date" });

        } else {

            res.json({ message: `User joining with this date` });
        }

    } catch(err) {

        res.json(err)
    }
}

// READ USERS BY JOININGYEAR
export const getUsersByJoiningYear = async (req:Request, res: Response) => {

    const { joiningYear } = req.params
    
    try {

        let users = await prisma.user.findMany({
            where: {
                joiningYear: {
                    gt: joiningYear
                }
            }
        });

        if(!users) {

            res.json({ message: "there are no users" });

        } else {

            res.json(users);
        }

    } catch(err) {

        res.json(err)
    }
}

// CREATE
export const createUser = async (req:Request, res:Response) => {

    try {

        const c_user = req.body as User

        await prisma.user.create({
            data: {
                username: c_user.username,
                password: c_user.password,
                email: c_user.email,
                joiningYear: c_user.joiningYear,
                age: c_user.age
    
            }
        });

        res.json({ message: "user created successfully" });

    } catch(err) {

        res.json(err);
    }

}