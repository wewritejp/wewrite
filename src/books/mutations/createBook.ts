import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateBook } from "../validations"

export default resolver.pipe(resolver.zod(CreateBook), resolver.authorize(), async (input, ctx) => {
  const currentUser = ctx.session.userId
  const data = {
    ...input,
    userId: currentUser,
  }
  const book = await db.book.create({ data })

  return book
})
