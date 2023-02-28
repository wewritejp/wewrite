import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const DeleteChapter = z.object({
  id: z.string(),
})

export default resolver.pipe(
  resolver.zod(DeleteChapter),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const currentUserId = ctx.session.userId
    const chapter = await db.chapter.findFirst({ where: { id }, include: { book: true } })
    if (!chapter) return

    const { book } = chapter

    if (book.userId != currentUserId) return

    await db.chapter.deleteMany({ where: { id } })

    return chapter
  }
)
