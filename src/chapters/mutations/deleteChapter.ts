import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const DeleteChapter = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeleteChapter),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const chapter = await db.chapter.deleteMany({ where: { id } });

    return chapter;
  }
);
