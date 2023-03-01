import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateSection } from "../validations"
import getBook from "src/books/queries/getBook"
import getChapter from "src/chapters/queries/getChapter"

export default resolver.pipe(
  resolver.zod(CreateSection),
  resolver.authorize(),
  async (input, ctx) => {
    const currentUserId = ctx.session.userId
    const chapter = await getChapter({ id: input.chapterId }, ctx)
    const book = await getBook({ id: chapter.bookId }, ctx)

    if (currentUserId != book.userId) return

    const section = await db.section.create({ data: input })

    return section
  }
)
