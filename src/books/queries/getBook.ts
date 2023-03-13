import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetBook = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetBook), async ({ id }, ctx) => {
  const currentUserId = ctx.session.userId
  const book = await db.book.findFirst({
    where: { id },
    include: {
      user: true,
      chapters: {
        orderBy: { createdAt: "asc" },
        include: { sections: { orderBy: { createdAt: "asc" } } },
      },
    },
  })
  const canVisibleBook = !!book && (book.userId == currentUserId || book.isPublished)

  if (!canVisibleBook) throw new NotFoundError()

  return book
})
