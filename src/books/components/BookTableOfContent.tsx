import { Book } from "@prisma/client"
import { Button } from "flowbite-react"
import Link from "next/link"
import { FC } from "react"

type Props = {
  book: Book
}

const BookTableOfContent: FC<Props> = ({ book }) => {
  return (
    <div className="flex flex-col gap-8 py-2">
      <div className="flex flex-col gap-2">
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
      </div>
    </div>
  )
}

export default BookTableOfContent
