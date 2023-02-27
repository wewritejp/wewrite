import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateBook } from "../validations"

export default resolver.pipe(resolver.zod(CreateBook), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const book = await db.book.create({ data: input })

  return book
})
