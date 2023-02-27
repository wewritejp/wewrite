import z from 'zod'

export const CreateBook = z.object({
  title: z.string(),
  body: z.string(),
  price: z.number(),
  content: z.string(),
  purpose: z.string(),
  note: z.string(),
  userId: z.string(),
})


export const UpdateBook = z.object({
  id: z.string(),
  title: z.string(),
});
