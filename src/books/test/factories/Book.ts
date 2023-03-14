import { Book } from "@prisma/client";

export const dummyBookA: Book = {
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
