import { BlitzPage } from "@blitzjs/next"
import { Book } from "@prisma/client"
import { gSSP } from "src/blitz-server"
import BookCard from "src/books/components/BookCard"
import getBooks from "src/books/queries/getBooks"
import Footer from "src/core/components/Footer"
import Layout from "src/core/layouts/Layout"

type Props = {
  books: Book[]
}

export const getServerSideProps = gSSP(async ({ ctx }) => {
  const { books } = await getBooks(
    { where: { isPublished: false, userId: ctx.session.userId! } },
    ctx
  )
  return { props: { books } }
})

const MyDraftBooksPage: BlitzPage<Props> = ({ books }) => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto flex flex-col gap-8 py-10 px-4 h-screen">
        <h1 className="text-blue-700 font-bold text-3xl">Draft Books</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {books.map((book, bookIndex) => (
            <BookCard book={book} key={bookIndex} />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default MyDraftBooksPage
