import { gSSP } from "src/blitz-server"
import getBook from "src/books/queries/getBook"
import getChapter from "src/chapters/queries/getChapter"
import Layout from "src/core/layouts/Layout"
import SectionContent from "src/sections/components/SectionContent"
import SectionSidebar from "src/sections/components/SectionSidebar"
import getSection from "src/sections/queries/getSection"

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  const id = query.sectionId as string
  const section = await getSection({ id }, ctx)
  const chapter = await getChapter({ id: section.chapterId }, ctx)
  const book = await getBook({ id: chapter.bookId }, ctx)

  return { props: { book, chapter, section } }
})

const ShowSectionPage = ({ book, chapter, section }) => {
  return (
    <Layout title={`${section.title} | ${book.title}`}>
      <div className="md:grid md:grid-cols-12 h-full ">
        <div className="md:col-span-3">
          <SectionSidebar book={book} />
        </div>
        <div className="md:col-span-9">
          <SectionContent book={book} chapter={chapter} section={section} />
        </div>
      </div>
    </Layout>
  )
}

export default ShowSectionPage
