import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"

import Layout from "src/core/layouts/Layout"
import getChapter from "src/chapters/queries/getChapter"
import updateChapter from "src/chapters/mutations/updateChapter"
import { ChapterForm, FORM_ERROR } from "src/chapters/components/ChapterForm"
import { gSSP } from "src/blitz-server"

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  const id = query.chapterId! as string
  const chapter = await getChapter({ id }, ctx)
  return { props: { chapter } }
})

const EditChapterPage = ({ chapter }) => {
  const router = useRouter()
  const [updateChapterMutation] = useMutation(updateChapter)

  return (
    <div>
      <ChapterForm
        submitText="Update Chapter"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={UpdateChapter}
        initialValues={chapter}
        onSubmit={async (values) => {
          try {
            await updateChapterMutation({
              id: chapter.id,
              ...values,
            })
            await router.push(
              Routes.ShowBookPage({
                bookId: chapter.bookId,
              })
            )
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </div>
  )
}

EditChapterPage.authenticate = true
EditChapterPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditChapterPage
