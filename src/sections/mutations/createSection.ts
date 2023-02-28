import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateSection } from "../validations"

export default resolver.pipe(
  resolver.zod(CreateSection),
  resolver.authorize(),
  async (input, ctx) => {
    const currentUser = ctx.session.userId
    

    const section = await db.section.create({ data: input })

    return section
  }
)
