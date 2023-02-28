import { z } from "zod"

export const id = z.string()

export const bookId = z.string()

export const headline = z.string().min(5).max(50)

export const CreateChapter = z.object({
  headline,
  bookId,
})

export const UpdateChapter = z.object({
  id,
  headline,
})
