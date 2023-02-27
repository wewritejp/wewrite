import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateBook } from "../validation"

export default resolver.pipe(
  resolver.zod(UpdateBook),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const book = await db.book.update({ where: { id }, data })

    return book
  }
)
