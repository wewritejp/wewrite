import { Routes } from "@blitzjs/next"
import { Avatar, Card } from "flowbite-react"
import Link from "next/link"

const BookCard = ({ book }) => {
  return (
    <Link href={Routes.ShowBookPage({ bookId: book.id })}>
      <a>
        <Card imgSrc={book.imageUrl}>
          <div className="h-36 flex flex-col gap-4">
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
            <div className="mr-auto">
              <Avatar rounded size={"sm"} img={book.user.imageUrl}>
                <p className="text-sm text-gray-700">{book.user.name}</p>
              </Avatar>
            </div>
            <div className="mt-auto">
              <span className="text-blue-700 text-xl font-bold">Free</span>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  )
}

export default BookCard
