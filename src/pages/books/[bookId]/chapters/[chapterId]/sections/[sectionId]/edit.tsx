import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
import getSection from "src/sections/queries/getSection"
import updateSection from "src/sections/mutations/updateSection"
import { SectionForm, FORM_ERROR } from "src/sections/components/SectionForm"
import { gSSP } from "src/blitz-server"
import { Section } from "@prisma/client"
import { BlitzPage } from "@blitzjs/auth"

type Props = {
  section: Section
}

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  const id = query.sectionId as string
  const section = await getSection({ id }, ctx)

  const isMyBook = section.chapter.book.userId == ctx.session.userId

  return { props: { section }, notFound: !isMyBook }
})

const EditSectionPage: BlitzPage<Props> = ({ section }) => {
  const router = useRouter()
  const [updateSectionMutation] = useMutation(updateSection)
  const bookId = useParam("bookId", "string")!

  return (
    <Layout title={"Edit Section"}>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold">Edit ‘‘{section.title}‘‘</h1>
        <SectionForm
          submitText="Update Section"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateSection}
          initialValues={section}
          onSubmit={async (values) => {
            try {
              await updateSectionMutation({
                id: section.id,
                ...values,
              })
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

EditSectionPage.authenticate = true

export default EditSectionPage
