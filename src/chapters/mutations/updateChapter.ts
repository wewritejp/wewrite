import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const UpdateChapter = z.object({
  id: z.string(),
  headline: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateChapter),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const chapter = await db.chapter.update({ where: { id }, data })

    return chapter
  }
)
