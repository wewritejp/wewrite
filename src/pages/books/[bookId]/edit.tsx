import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"

import Layout from "src/core/layouts/Layout"
import getBook from "src/books/queries/getBook"
import updateBook from "src/books/mutations/updateBook"
import { BookForm, FORM_ERROR } from "src/books/components/BookForm"
import { UpdateBook } from "src/books/validations"
import { gSSP } from "src/blitz-server"
import Footer from "src/core/components/Footer"
import { Book } from "@prisma/client"
import { BlitzPage } from "@blitzjs/auth"

type Props = {
  book: Book
}

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  const id = query.bookId as string
  const book = await getBook({ id }, ctx)
  const isMyBook = book.userId == ctx.session.userId

  return { props: { book }, notFound: !isMyBook }
})

const EditBookPage: BlitzPage<Props> = ({ book }) => {
  const router = useRouter()
  const [updateBookMutation] = useMutation(updateBook)

  return (
    <Layout title={"Edit book"}>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold">Edit ‘‘{book.title}‘‘</h1>

        <BookForm
          submitText="Update Book"
          schema={UpdateBook}
          initialValues={book}
          onSubmit={async (values) => {
            try {
              await updateBookMutation({ ...values })
              await router.push(Routes.ShowBookPage({ bookId: book.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
      <Footer />
    </Layout>
  )
}

EditBookPage.authenticate = true

export default EditBookPage
