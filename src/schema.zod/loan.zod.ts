import { TypeOf, z } from "zod";

export const createLoanSchema = z.object({

    body: z.object({

        userId: z.string({
            required_error: "user id is required!",
            invalid_type_error: "set string for userId feild"
        }),
        bookId: z.string({
            required_error: "book id is required!",
            invalid_type_error: "set string for bookId feild"
        })
    })
});

export type CreateLoanSchema = TypeOf<typeof createLoanSchema>["body"];