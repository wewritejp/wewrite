import { Book, Section } from "@prisma/client"
import { Button } from "flowbite-react"
import Link from "next/link"
import { FC } from "react"
import { useMyBook } from "../hooks/useMyBook"
import { Chapter } from "@prisma/client"
import { MdDelete } from "react-icons/md"
import { useMutation } from "@blitzjs/rpc"
import deleteChapter from "src/chapters/mutations/deleteChapter"
import { useRouter } from "next/router"
import { BsPencil } from "react-icons/bs"
import { Routes } from "@blitzjs/next"
import { HiPlus } from "react-icons/hi"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { AiOutlineEye } from "react-icons/ai"

type Props = {
  book: Book & { chapters: Chapter[] & { sections: Section[] } }
}

const BookTableOfContent: FC<Props> = ({ book }) => {
  const { isMyBook } = useMyBook(book)
  const [deleteChapterMutation] = useMutation(deleteChapter)
  const router = useRouter()

  const handleDeleteChapter = async (chapterId: string) => {
    if (confirm("Delete Chapter?")) {
      await deleteChapterMutation({ id: chapterId })
      await router.push(Routes.ShowBookPage({ bookId: book.id }))
    }
  }

  return (
    <div className="flex flex-col gap-8 py-2">
      <>
        {!!book.chapters[0] ? (
          <>
            {book.chapters.map((chapter: Chapter & { sections: Section[] }, chapterIndex) => (
              <div className="flex flex-col gap-2" key={chapterIndex}>
                <div className="flex pb-4">
                  <h3 className="text-blue-800 w-28 my-auto">Chapter {chapterIndex + 1}</h3>
                  <h4 className="my-auto">{chapter.headline}</h4>
                  {isMyBook && (
                    <div className="ml-auto flex gap-2">
                      <Link
                        href={Routes.NewSectionPage({ bookId: book.id, chapterId: chapter.id })}
                      >
                        <Button size={"xs"}>
                          <HiPlus className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link
                        href={Routes.EditChapterPage({ bookId: book.id, chapterId: chapter.id })}
                      >
                        <Button color="success" size={"xs"}>
                          <BsPencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        color="failure"
                        size={"xs"}
                        onClick={() => handleDeleteChapter(chapter.id)}
                      >
                        <MdDelete className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
                {chapter.sections.map((section, sectionIndex) => (
                  <div className="border-b pb-4 mb-2 text-black flex">
                    <span>
                      {chapterIndex + 1}-{sectionIndex + 1} {section.title}
                    </span>

                    <div className="ml-auto flex gap-1">
                      <Link
                        href={Routes.ShowSectionPage({
                          bookId: book.id,
                          chapterId: chapter.id,
                          sectionId: section.id,
                        })}
                      >
                        <Button size={"xs"} outline>
                          <AiOutlineEye />
                        </Button>
                      </Link>
                      <Link
                        href={Routes.EditSectionPage({
                          bookId: book.id,
                          chapterId: chapter.id,
                          sectionId: section.id,
                        })}
                      >
                        <Button size={"xs"} color={"success"} outline>
                          <HiOutlinePencilAlt />
                        </Button>
                      </Link>
                      <Button size={"xs"} color={"failure"} outline>
                        <IoMdClose />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        ) : (
          <p>There is no chapters yet.</p>
        )}
      </>

      <>
        {isMyBook && (
          <Link href={Routes.NewChapterPage({ bookId: book.id })}>
            <Button color={"success"}>Add Chapter</Button>
          </Link>
        )}
      </>
    </div>
  )
}

export default BookTableOfContent
