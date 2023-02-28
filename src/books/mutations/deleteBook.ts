import { resolver } from "@blitzjs/rpc";
import { z } from "zod";
import getBook from "../queries/getBook";

const DeleteBook = z.object({
  id: z.string(),
});

export default resolver.pipe(
  resolver.zod(DeleteBook),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const book = await getBook({ id }, ctx)
    const currentUserId = ctx.session.userId

    if (currentUserId != book.userId) return

    return book;
  }
);
