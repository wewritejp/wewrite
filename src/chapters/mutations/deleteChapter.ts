import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"
import getChapter from "../queries/getChapter"

const DeleteChapter = z.object({
  id: z.string(),
})

export default resolver.pipe(
  resolver.zod(DeleteChapter),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const chapter = await getChapter({ id }, ctx)
    const currentUserId = ctx.session.userId

    if (chapter.book.userId != currentUserId) return

    await db.chapter.deleteMany({ where: { id } })

    return chapter
  }
)
