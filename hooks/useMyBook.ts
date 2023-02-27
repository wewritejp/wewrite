import { Book } from "@prisma/client"
import { useEffect, useState } from "react"
import { useSession } from "@blitzjs/auth"

export const useMyBook = (book: Book) => {
  const [isMyBook, setIsMyBook] = useState(false)
  const session = useSession({ suspense: false })

  useEffect(() => {
    setIsMyBook(book.userId == session.userId)
  }, [book, session])

  return { isMyBook }
}
