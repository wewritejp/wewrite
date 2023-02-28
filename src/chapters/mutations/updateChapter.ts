import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateChapter } from "../validations"
import getChapter from "../queries/getChapter"
import getBook from "src/books/queries/getBook"

export default resolver.pipe(
  resolver.zod(UpdateChapter),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const chapter = await getChapter({ id }, ctx)
    const book = await getBook({ id: chapter.bookId }, ctx)
    const currentUserId = ctx.session.userId

    if (currentUserId != book.userId) return
    
    await db.chapter.update({ where: { id }, data })

    return chapter
  }
)
