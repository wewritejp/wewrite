import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import createBook from "src/books/mutations/createBook"
import { BookForm, FORM_ERROR } from "src/books/components/BookForm"
import { CreateBook } from "src/books/validations"

const NewBookPage = () => {
  const router = useRouter()
  const [createBookMutation] = useMutation(createBook)

  return (
    <Layout title={"Create New Book"}>
      <div className="max-w-md mx-auto flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Create New Book</h1>

        <BookForm
          submitText="Create Book"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
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
    </Layout>
  )
}

NewBookPage.authenticate = true

export default NewBookPage
