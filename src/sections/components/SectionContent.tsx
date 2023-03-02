import { Book, Chapter, Section } from "@prisma/client"
import { FC } from "react"
import Breadcrumb from "src/core/components/Breadcrumb"
import useCalculateHeight from "src/core/hooks/useCalculateHeight"

type Props = {
  book: Book
  chapter: Chapter
  section: Section
  stage: string
}

const SectionContent: FC<Props> = ({ book, chapter, section, stage }) => {
  const { remainingHeight } = useCalculateHeight()

  return (
    <div className="p-4 w-full md:overflow-y-scroll" style={{ height: remainingHeight }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <Breadcrumb items={["books", book.title, chapter.headline]} />
        <div className="format">
          <h2 className="flex gap-4">
            <span className="bg-blue-800 text-white px-2 rounded whitespace-nowrap h-fit">
              {stage}
            </span>
            <span>{section.title}</span>
          </h2>
          <div className="sentence">{section.content}</div>
        </div>
      </div>
    </div>
  )
}

export default SectionContent
