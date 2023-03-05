import { TypeOf, z } from "zod";

const genre = ["Drama","Action", "Comedy"] as const

export const createMovieSchema = z.object({

    body: z.object({
        name: z.string({
            required_error: "movie name is required!",
            invalid_type_error: "set string for name feild"

        }).min(3, "movie name must be more than 2 charcters"),
        genre: z.enum(genre),
        rating: z.number({
            required_error: "rating is required!",
            invalid_type_error: "set number for rating feild"
        }).min(1).max(5),
        duration: z.number({
            required_error: "duration is required!",
            invalid_type_error: "set number for duration feild"
        }).min(60)
    })
});