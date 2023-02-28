import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateChapter } from "../validations"
import getBook from "src/books/queries/getBook"

export default resolver.pipe(
  resolver.zod(CreateChapter),
  resolver.authorize(),
  async (input, ctx) => {
    console.log(input.bookId)
    console.log(typeof input.bookId)
    const book = await getBook({ id: input.bookId }, ctx)
    const currentUserId = ctx.session.userId

    if (currentUserId != book.userId) return

    const chapter = await db.chapter.create({ data: input })

    return chapter
  }
)
