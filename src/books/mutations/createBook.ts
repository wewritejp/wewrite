import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateBook = z.object({
  title: z.string(),
  body: z.string(),
  price: z.number(),
  content: z.string(),
  purpose: z.string(),
  note: z.string(),
  userId: z.string(),
})

export default resolver.pipe(resolver.zod(CreateBook), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const book = await db.book.create({ data: input })

  return book
})
