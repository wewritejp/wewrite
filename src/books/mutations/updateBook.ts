import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateBook } from "../validations"
import getBook from "../queries/getBook"

export default resolver.pipe(
  resolver.zod(UpdateBook),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const currentUserId = ctx.session.userId
    const book = await getBook({ id }, ctx)

    if (book.userId !== currentUserId) return

    await db.book.update({ where: { id }, data })

    return book
  }
)
