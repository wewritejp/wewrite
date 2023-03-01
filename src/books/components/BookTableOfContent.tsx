import { Book, Section } from "@prisma/client"
import { FC } from "react"
import { useMyBook } from "../hooks/useMyBook"
import { Chapter } from "@prisma/client"
import {
  AddChapterButton,
  AddNewSectionButton,
  DeleteChapterButton,
  DeleteSectionButton,
  EditChapterButton,
  EditSectionButton,
  VisitSectionButton,
} from "./BookTableOfContentButtons"

type Props = {
  book: Book & { chapters: Chapter[] & { sections: Section[] } }
}

const BookTableOfContent: FC<Props> = ({ book }) => {
  const { isMyBook } = useMyBook(book)

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
                      <AddNewSectionButton book={book} chapter={chapter} />
                      <EditChapterButton book={book} chapter={chapter} />
                      <DeleteChapterButton book={book} chapter={chapter} />
                    </div>
                  )}
                </div>
                {chapter.sections.map((section, sectionIndex) => (
                  <div className="border-b pb-4 mb-2 text-black flex">
                    <span>
                      {chapterIndex + 1}-{sectionIndex + 1} {section.title}
                    </span>

                    <div className="ml-auto flex gap-1">
                      <VisitSectionButton book={book} chapter={chapter} section={section} />
                      <EditSectionButton book={book} chapter={chapter} section={section} />
                      <DeleteSectionButton book={book} chapter={chapter} section={section} />
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

      {isMyBook && <AddChapterButton book={book} />}
    </div>
  )
}

export default BookTableOfContent
