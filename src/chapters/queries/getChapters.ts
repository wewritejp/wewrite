import { paginate } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db";

interface GetChaptersInput
  extends Pick<
    Prisma.ChapterFindManyArgs,
    "where" | "orderBy" | "skip" | "take"
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetChaptersInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: chapters,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.chapter.count({ where }),
      query: (paginateArgs) =>
        db.chapter.findMany({ ...paginateArgs, where, orderBy }),
    });

    return {
      chapters,
      nextPage,
      hasMore,
      count,
    };
  }
);
