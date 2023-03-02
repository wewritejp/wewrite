import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetChapter = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetChapter), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const chapter = await db.chapter.findFirst({
    where: { id },
    include: { book: true, sections: true },
  })

  if (!chapter) throw new NotFoundError()

  return chapter
})
