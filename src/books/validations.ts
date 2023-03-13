import z from "zod"

export const id = z.string()

export const title = z.string().min(5).max(50)

export const body = z.string().min(10).max(500)

export const price = z.number().min(100).max(9999)

export const purpose = z.string().min(5).max(50)

export const content = z.string().min(10).max(9999)

export const note = z.string().min(10).max(9999)

export const imageUrl = z.string().url()

export const isPublished = z.boolean()

export const CreateBook = z.object({
  title,
  body,
  price,
  purpose,
  content,
  note,
  imageUrl
})

export const UpdateBook = z.object({
  id,
  title,
  body,
  price,
  purpose,
  content,
  note,
  imageUrl,
  isPublished
})
