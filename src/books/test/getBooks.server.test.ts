import db from "db"
import getBooks from "../queries/getBooks"
import { dummyBookA } from "./factories/Book"
import { dummyUser } from "src/users/test/User"
import { mockCtx } from "src/core/test/mock"

afterEach(async () => {
  await db.$reset()
})

describe("Test getBooks", () => {
  describe("when books are empty", () => {
    it("return []", async () => {
      const { books } = await getBooks({}, mockCtx)
      expect(books).toEqual([])
    })
  })

  describe("when filter 'published' as search condition", () => {
    beforeEach(async () => {
      await db.user.create({ data: dummyUser })
    })

    it("return all published books", async () => {
      await db.book.create({ data: dummyBookA })

      const { books } = await getBooks({ where: { isPublished: true } }, mockCtx)
      expect(books[0]?.title).toEqual(dummyBookA.title)
      expect(books[0]?.isPublished).toEqual(true)
      expect(books[0]?.user).toEqual(dummyUser)
    })

    it("does not return draft books", async () => {
      await db.book.create({ data: { ...dummyBookA, isPublished: false } })

      const { books } = await getBooks({ where: { isPublished: true } }, mockCtx)
      expect(books).toEqual([])
    })
  })
})
