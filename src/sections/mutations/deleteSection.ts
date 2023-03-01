import { resolver } from "@blitzjs/rpc"
import db from "db"
import getChapter from "src/chapters/queries/getChapter"
import { z } from "zod"
import getSection from "../queries/getSection"
import getBook from "src/books/queries/getBook"

const DeleteSection = z.object({
  id: z.string(),
})

export default resolver.pipe(
  resolver.zod(DeleteSection),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const currentUserId = ctx.session.userId
    const section = await getSection({ id }, ctx)
    const chapter = await getChapter({ id: section.chapterId }, ctx)
    const book = await getBook({ id: chapter.bookId }, ctx)

    if (currentUserId != book.userId) return

    await db.section.deleteMany({ where: { id } })

    return section
  }
)
