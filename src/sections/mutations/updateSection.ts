import { resolver } from "@blitzjs/rpc";
import db from "db";
import { UpdateSection } from "../validations";

export default resolver.pipe(
  resolver.zod(UpdateSection),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const section = await db.section.update({ where: { id }, data });

    return section;
  }
);
