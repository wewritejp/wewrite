import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import createBook from "src/books/mutations/createBook"
import { BookForm, FORM_ERROR } from "src/books/components/BookForm"
import { CreateBook } from "src/books/validations"
import Footer from "src/core/components/Footer"

const NewBookPage = () => {
  const router = useRouter()
  const [createBookMutation] = useMutation(createBook)

  return (
    <Layout title={"Create New Book"}>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold">Create New Book</h1>

        <BookForm
          submitText="Create Book"
          schema={CreateBook}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const book = await createBookMutation(values)
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

NewBookPage.authenticate = true

export default NewBookPage
