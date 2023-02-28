import { Book } from "@prisma/client"
import { Button } from "flowbite-react"
import Link from "next/link"
import { FC } from "react"
import { useMyBook } from "../hooks/useMyBook"
import { Routes } from "@blitzjs/next"
import { Chapter } from "@prisma/client"
import { MdDelete } from "react-icons/md"

type Props = {
  book: Book & { chapters: Chapter[] }
}

const BookTableOfContent: FC<Props> = ({ book }) => {
  const { isMyBook } = useMyBook(book)

  return (
    <div className="flex flex-col gap-8 py-2">
      {/* <div className="flex flex-col gap-2">
        <div className="flex pb-4">
          <h3 className="text-blue-800 w-28 my-auto">Section 0</h3>
          <h4 className="my-auto">はじめに</h4>
        </div>
        <div className="border-b pb-4 mb-2 text-black flex">
          <span>0-1 TypeScript と React で Unsplash 風アプリを作ろう</span>
          <div className="ml-auto">
            <Link href={`/books/${book.id}/chapters/1`}>
              <Button size={"xs"}>SAMPLE</Button>
            </Link>
          </div>
        </div>
        <div className="border-b pb-4 mb-2 text-black flex">
          <span>0-2 VSCode のインストール</span>
          <div className="ml-auto">
            <Link href={`/books/${book.id}/chapters/1`}>
              <Button size={"xs"}>SAMPLE</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex pb-4">
          <h3 className="text-blue-800 w-28 my-auto">Section 1</h3>
          <h4 className="my-auto">TypeScriptとReactの開発について知ろう</h4>
        </div>
        <div className="border-b pb-4 mb-2 text-black">
          0-1 TypeScript と React で Unsplash 風アプリを作ろう
        </div>
        <div className="border-b pb-4 mb-2 text-black">0-2 VSCode のインストール</div>
      </div> */}

      <>
        {book.chapters.map((chapter, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="flex pb-4">
              <h3 className="text-blue-800 w-28 my-auto">Section {index + 1}</h3>
              <h4 className="my-auto">{chapter.headline}</h4>
              {isMyBook  && (
                <div className="ml-auto">
                  <Button color="failure" size={"xs"}>
                    <MdDelete className="h-4 w-4 mx-2" />
                  </Button>
                </div>
              )}
            </div>
            {/* <div className="border-b pb-4 mb-2 text-black">
              0-1 TypeScript と React で Unsplash 風アプリを作ろう
            </div>
            <div className="border-b pb-4 mb-2 text-black">0-2 VSCode のインストール</div> */}
          </div>
        ))}
      </>

      <>
        {isMyBook && (
          <Link href={Routes.NewChapterPage({ bookId: book.id })}>
            <Button color={"success"}>Add Section</Button>
          </Link>
        )}
      </>
    </div>
  )
}

export default BookTableOfContent
