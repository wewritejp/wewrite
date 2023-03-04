import z from "zod"

export const UpdateUser = z.object({
  id: z.string(),
  name: z.string().min(3).max(10),
  imageUrl: z.string().nullable().optional(),
  introduction: z.string().max(500).nullable().optional(),
})
