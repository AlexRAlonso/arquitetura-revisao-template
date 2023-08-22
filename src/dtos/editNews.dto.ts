import z from "zod";

export interface EditNewsInputDTO {
  id: string;
  title?: string;
  description?: string;
}

export const EditNewsSchema = z
  .object({
    id: z.string().min(3).startsWith("n"),
    title: z.string().min(6).optional(),
    description: z.string().min(20).optional(),
  })
  .transform((data) => data as EditNewsInputDTO);
