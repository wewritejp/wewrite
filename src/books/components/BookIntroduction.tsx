import { Avatar, Button, Rating } from "flowbite-react"
import dateFormat from "dateformat"
import { MdUpdate } from "react-icons/md"
import Tags from "src/core/components/Tags"
import Breadcrumb from "src/core/components/Breadcrumb"
import { BsPencil } from "react-icons/bs"
import { useMyBook } from "src/books/hooks/useMyBook"
import Link from "next/link"
import { Routes } from "@blitzjs/next"
import { Book, User } from "@prisma/client"
import { FC } from "react"
import BookSubscribeButton from "./BookSubscribeButton"

type Props = {
  book: Book & { user: User }
}

const BookIntroduction: FC<Props> = ({ book }) => {
  const { isMyBook } = useMyBook(book)

  return (
    <section className="min-h-96 bg-blue-800">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-4 text-white">
        <Breadcrumb items={["books"]} isTextWhite />
        <div className="flex flex-col gap-4">
          <div>
            <h1 className=" text-2xl font-bold">{book.title}</h1>
          </div>
          <div className="flex">
            {/* <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-200">4.95 (30)</p>
            </Rating> */}
            <Avatar rounded className="ml-auto text-sm" size={"sm"} img={book.user.imageUrl || ""}>
              {book.user.name}
            </Avatar>
          </div>
          <div className="flex-row md:grid md:grid-cols-12 gap-8">
            <div className="pb-4 md:col-span-5">
              <img
                src={book.imageUrl}
                alt="thubnail"
                width={4000}
                height={2000}
                className="rounded"
              />
            </div>
            <h2 className="md:col-span-7">{book.body}</h2>
          </div>
          <div className="flex">{/* <Tags items={["hogehoge", "foobar"]} /> */}</div>
          <div className="flex">
            <div className="mt-auto flex gap-1">
              <MdUpdate />
              <p className="text-xs">{dateFormat(book.updatedAt, "fullDate")}</p>
            </div>
            <div className="flex ml-auto gap-4">
              <BookSubscribeButton book={book} />
              {isMyBook && (
                <Link href={Routes.EditBookPage({ bookId: book.id })}>
                  <Button color="warning">
                    <BsPencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookIntroduction
