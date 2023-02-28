import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetBook = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetBook), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const book = await db.book.findFirst({ where: { id }, include: { user: true, chapters: true } })

  if (!book) throw new NotFoundError()

  return book
})
