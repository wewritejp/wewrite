import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateChapter = z.object({
  headline: z.string(),
  bookId: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateChapter),
  resolver.authorize(),
  async (input, ctx) => {
    const currentUserId = ctx.session.userId
    const book = await db.book.findFirst({
      where: { id: input.bookId },
      include: { chapters: true },
    })

    if (currentUserId != book?.userId) return

    if (book) {
      const chapter = await db.chapter.create({ data: input })

      return chapter
    }
  }
)
