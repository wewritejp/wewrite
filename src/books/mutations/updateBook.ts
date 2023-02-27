import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateBook } from "../validations"

export default resolver.pipe(
  resolver.zod(UpdateBook),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const currentUserId = ctx.session.userId
    const book = await db.book.findFirst({ where: { id } })

    if (!book || book.userId !== currentUserId) return

    await db.book.update({ where: { id }, data })

    return book
  }
)
