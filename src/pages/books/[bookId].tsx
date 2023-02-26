import { gSSP } from "src/blitz-server"
import Layout from "src/core/layouts/Layout"
import getBook from "src/books/queries/getBook"
import BookIntroduction from "src/books/components/BookIntroduction"
import BookDescription from "src/books/components/BookDescription"

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  // string型に変更するため、一旦1で放置
  const book = await getBook({ id: 1 }, ctx)

  return { props: { book } }
})

const ShowBookPage = ({ book }) => {
  return (
    <div>
      <BookIntroduction book={book} />
      <BookDescription book={book} />
    </div>
  )
}

ShowBookPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowBookPage
