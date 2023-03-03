import { Routes } from "@blitzjs/next"
import { Button } from "flowbite-react"
import Link from "next/link"
import { BsBook } from "react-icons/bs"

// 最初のsectionが存在していれば、「subscribe」ボタンを表示
// 存在しなければ、「comming soon」を表示
const BookSubscribeButton = ({ book }) => {
  const firstChapter = book.chapters[0]
  const firstSection = firstChapter?.sections[0]

  return (
    <>
      {firstChapter && firstSection ? (
        <Link
          href={Routes.ShowSectionPage({
            bookId: book.id,
            chapterId: firstChapter.id,
            sectionId: firstSection.id,
          })}
        >
          <Button color={"light"}>
            <BsBook className="h-4 w-4 mr-1" />
            Subscribe
          </Button>
        </Link>
      ) : (
        <div className="bg-gray-800 rounded-md text-white flex px-4 py-2">
          <p className="my-auto">Comming Soon...</p>
        </div>
      )}
    </>
  )
}

export default BookSubscribeButton
