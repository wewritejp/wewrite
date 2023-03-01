import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateSection } from "../validations"
import getChapter from "src/chapters/queries/getChapter"
import getSection from "../queries/getSection"
import getBook from "src/books/queries/getBook"

export default resolver.pipe(
  resolver.zod(UpdateSection),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const currentUserId = ctx.session.userId
    const section = await getSection({ id }, ctx)
    const chapter = await getChapter({ id: section.chapterId }, ctx)
    const book = await getBook({ id: chapter.bookId }, ctx)

    if (currentUserId != book.userId) return

    await db.section.update({ where: { id }, data })

    return section
  }
)
