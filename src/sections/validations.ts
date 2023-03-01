import z from "zod"

export const id = z.string()

export const chapterId = z.string()

export const title = z.string().min(5).max(50)

export const content = z.string().min(10).max(9999)

export const CreateSection = z.object({
  title,
  content,
  chapterId,
})

export const UpdateSection = z.object({
  id,
  title,
  content,
})

export const SectionFormValidation = z.object({
  title,
  content,
})
