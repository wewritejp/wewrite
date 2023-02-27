import { gSSP } from "src/blitz-server"
import Layout from "src/core/layouts/Layout"
import getBook from "src/books/queries/getBook"
import BookIntroduction from "src/books/components/BookIntroduction"
import BookDescription from "src/books/components/BookDescription"
import Footer from "src/core/components/Footer"

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  const id = query.bookId as string
  const book = await getBook({ id }, ctx)

  return { props: { book } }
})

const ShowBookPage = ({ book }) => {
  return (
    <div>
      <BookIntroduction book={book} />
      <BookDescription book={book} />
      <Footer />
    </div>
  )
}

ShowBookPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowBookPage
