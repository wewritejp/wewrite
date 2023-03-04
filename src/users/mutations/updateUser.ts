import { resolver } from "@blitzjs/rpc";
import db from "db";
import { UpdateUser } from "../validations";

export default resolver.pipe(
  resolver.zod(UpdateUser),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const currentUserId = ctx.session.userId
    const user = await db.user.update({ where: { id: currentUserId }, data });

    return user;
  }
);
