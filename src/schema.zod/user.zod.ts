import { TypeOf, z } from "zod";
import { Role } from "@prisma/client";

const role = ["Admin","User"] as const

export const createUserSchema = z.object({

    body: z.object({
        
        username: z.string({
            required_error: "username is required!",
            invalid_type_error: "set string for username feild"

        }).min(3, "username length must be more than 2 characters"),
        password: z.number({
            required_error: "password is required!",
            invalid_type_error: "set number for password feild"
        }).min(6, "password length must be more than 5 characters"),
        email: z.string({
            required_error: "email is required!",
            invalid_type_error: "set email for email feild"
        }).email(),
        role: z.enum(role),
        joiningYear: z.string({
            required_error: "joining year is required!",
            invalid_type_error: "set string for joiningYear feild"
        }),
        age: z.number({
            required_error: "age is required!",
            invalid_type_error: "set number for age feild"
        })
    }),
});

export type CreateUserSchema = TypeOf<typeof createUserSchema>["body"];