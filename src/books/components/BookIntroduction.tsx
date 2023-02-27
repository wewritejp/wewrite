import { Avatar, Button, Rating } from "flowbite-react"
import Image from "next/image"
import dateFormat from "dateformat"
import { MdUpdate } from "react-icons/md"
import Tags from "src/core/components/Tags"
import Breadcrumb from "src/core/components/Breadcrumb"
import { BsPencil, BsBook } from "react-icons/bs"
import { useMyBook } from "hooks/useMyBook"
import Link from "next/link"
import { Routes } from "@blitzjs/next"

const BookIntroduction = ({ book }) => {
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
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-200">4.95 (30)</p>
            </Rating>
            <Avatar rounded className="ml-auto text-sm" size={"sm"}>
              {book.user.name}
            </Avatar>
          </div>
          <div className="flex-row md:grid md:grid-cols-12 gap-8">
            <div className="pb-4 md:col-span-5">
              <Image
                src="https://i.ytimg.com/vi/-UjD_YrVhUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-Jl1S1fLGAmlaj_7Jg8oE7dXCmw"
                alt="thubnail"
                width={4000}
                height={2000}
              />
            </div>
            <h2 className="md:col-span-7">{book.body}</h2>
          </div>
          <div className="flex">
            <Tags items={["hogehoge", "foobar"]} />
          </div>
          <div className="flex">
            <div className="mt-auto flex gap-1">
              <MdUpdate />
              <p className="text-xs">{dateFormat(book.updatedAt, "fullDate")}</p>
            </div>
            <div className="flex ml-auto gap-4">
              <Button color={"light"}>
                <BsBook className="h-4 w-4 mr-1" />
                Subscribe
              </Button>
              {isMyBook && (
                <Link href={Routes.EditBookPage({ bookId: book.id })}>
                  <Button color={"failure"}>
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
