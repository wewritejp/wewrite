import db from "db"
import getBook from "../queries/getBook"
import { mockCtx } from "src/core/test/mock"
import { dummyBookA } from "./factories/Book"
import { dummyUser } from "src/users/test/User"

afterEach(async () => {
  await db.$reset()
})

describe("Test getBook", () => {
  beforeEach(async () => {
    await db.user.create({ data: dummyUser })
    await db.book.create({ data: dummyBookA })
  })

  describe("when a book was found", () => {
    it("return a book", async () => {
      const book = await getBook({ id: dummyBookA.id }, mockCtx)
      expect(book.title).toEqual(dummyBookA.title)
    })
  })
})
