import db, { Book, User } from "db"
import getBooks from "../queries/getBooks"
import { vi } from "vitest"

afterEach(async () => {
  await db.$reset()
})

const mockCtx: any = {
  session: {
    $create: vi.fn(),
  },
}

const dummyUser: User = {
  id: "higakijin",
  name: "higakijin",
  email: "higakijin@example.com",
  hashedPassword: "higakijinPassword",
  role: "User",
  introduction: "my name is higakijin",
  imageUrl: "https://higakijin@example.png",
  createdAt: new Date("2023-3-14"),
  updatedAt: new Date("2023-3-14"),
}

const dummyBookA: Book = {
  id: "dummyBookA",
  title: "dummyBookA title",
  body: "dummyBookA body",
  price: 100,
  purpose: "dummyBookA purpose",
  content: "dummyBookA content",
  note: "dummyBookA note",
  imageUrl: "https://dummyBookA.example.png",
  isPublished: true,
  createdAt: new Date("2023-3-14"),
  updatedAt: new Date("2023-3-14"),
  userId: "higakijin",
}

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
      await db.book.create({ data: dummyBookA })
    })

    it("return all published books", async () => {
      const { books } = await getBooks({ where: { isPublished: true } }, mockCtx)
      expect(books[0]?.title).toEqual(dummyBookA.title)
      expect(books[0]?.isPublished).toEqual(true)
      expect(books[0]?.user).toEqual(dummyUser)
    })

    it('does not return draft books', async () => {

    })
  })
})
