import { TypeOf, z } from "zod";
import { BookGenre } from "@prisma/client";

const bookGenre = ["Horror","Cookbooks", "Essays", "History"] as const

export const createBookSchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "name is required!",
            invalid_type_error: "set string for name feild"

        }).min(3, "name must be more than 2 characters"),
        genre: z.enum(bookGenre)
    })
});

export type CreateBookSchema = TypeOf<typeof createBookSchema>["body"];