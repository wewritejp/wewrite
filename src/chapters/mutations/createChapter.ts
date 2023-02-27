import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const CreateChapter = z.object({
  name: z.string(),
  bookId: z.number(),
});

export default resolver.pipe(
  resolver.zod(CreateChapter),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const chapter = await db.chapter.create({ data: input });

    return chapter;
  }
);
