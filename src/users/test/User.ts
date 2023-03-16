import { User } from "@prisma/client";

export const dummyUser: User = {
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
