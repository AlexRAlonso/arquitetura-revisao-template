import z from "zod"

export interface CreateNewsInputDTO {
    title: string,
    description: string,
    author: string
}

export const CreateNewsSchema = z.object({
    title: z.string().min(6),
    description: z.string().min(20),
    author: z.string().min(3).startsWith("a") //isso se refere ao ID do autor, não ao nome!
}).transform(data => data as CreateNewsInputDTO)