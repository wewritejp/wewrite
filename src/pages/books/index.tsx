import { BlitzPage } from "@blitzjs/next"
import { Book } from "@prisma/client"
import { gSSP } from "src/blitz-server"
import getBooks from "src/books/queries/getBooks"
import Layout from "src/core/layouts/Layout"

type Props = {
  books: Book[]
}

export const getServerSideProps = gSSP(async ({ ctx }) => {
  const { books } = await getBooks({}, ctx)
  return { props: { books } }
})

const BooksPage: BlitzPage<Props> = ({ books }) => {
  console.log(books)
  return (
    <Layout>
      <div>
        {books.map((book, bookIndex) => (
          <div key={bookIndex}>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BooksPage
