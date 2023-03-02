import { Routes } from "@blitzjs/next"
import { Card } from "flowbite-react"
import Link from "next/link"

const BookCard = ({ book }) => {
  return (
    <Link href={Routes.ShowBookPage({ bookId: book.id })}>
      <a>
        <Card imgSrc="https://i.ytimg.com/vi/-UjD_YrVhUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-Jl1S1fLGAmlaj_7Jg8oE7dXCmw">
          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4 text-sm">{book.body}</p>
        </Card>
      </a>
    </Link>
  )
}

export default BookCard
