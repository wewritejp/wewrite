import { BlitzPage, Routes, useParam } from "@blitzjs/next"
import { Book, Chapter, Section, User } from "@prisma/client"
import { Avatar } from "flowbite-react"
import Link from "next/link"
import useCalculateHeight from "src/core/hooks/useCalculateHeight"

type Props = {
  book: Book & { user: User; chapters: Chapter[] & { sections: Section[] } }
}

const SectionSidebar: BlitzPage<Props> = ({ book }) => {
  const { remainingHeight } = useCalculateHeight()
  const sectionId = useParam("sectionId", "string")!

  return (
    <div
      className="bg-gray-50 format md:overflow-y-scroll hidden md:block"
      style={{ height: remainingHeight }}
    >
      <div className="px-4 py-8">
        <div className="border-b-2 pb-4 mb-8 px-2">
          <h4>{book.title}</h4>
          <div className="flex gap-2">
            <Avatar size={"sm"} className="text-gray-800" rounded>
              {book.user.name}
            </Avatar>
          </div>
        </div>
        {book.chapters.map((chapter: Chapter & { sections: Section[] }, chapterIndex) => (
          <div className="p-2" key={chapterIndex}>
            <h4 className="text-blue-800 text-lg">
              Section {chapterIndex + 1}: {chapter.headline}
            </h4>
            {chapter.sections.map((section: Section, sectionIndex) => (
              <div className="flex flex-col gap-2 pb-1" key={sectionIndex}>
                <Link
                  href={Routes.ShowSectionPage({
                    bookId: book.id,
                    chapterId: chapter.id,
                    sectionId: section.id,
                  })}
                >
                  <a
                    className={`no-underline rounded px-4 py-2 font-semibold text-gray-800 ${
                      sectionId == section.id && "bg-blue-100"
                    }`}
                  >
                    {chapterIndex + 1}-{sectionIndex + 1} {section.title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionSidebar
