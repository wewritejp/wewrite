import { Routes } from "@blitzjs/next"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import createChapter from "src/chapters/mutations/createChapter"
import { ChapterForm, FORM_ERROR } from "src/chapters/components/ChapterForm"
import { ChaperFormValidation } from "src/chapters/validations"

const NewChapterPage = () => {
  const router = useRouter()
  const bookId = useParam("bookId", "string")!
  const [createChapterMutation] = useMutation(createChapter)

  return (
    <Layout title={"Create New Chapter"}>
      <div className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Create New Chapter</h1>
        <ChapterForm
          submitText="Create Chapter"
          schema={ChaperFormValidation}
          onSubmit={async (values) => {
            try {
              await createChapterMutation({ ...values, bookId })
              await router.push(Routes.ShowBookPage({ bookId }))
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

NewChapterPage.authenticate = true

export default NewChapterPage
