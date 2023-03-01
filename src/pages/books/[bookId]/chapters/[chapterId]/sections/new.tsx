import { Routes } from "@blitzjs/next"
import { useParam } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import createSection from "src/sections/mutations/createSection"
import { SectionForm, FORM_ERROR } from "src/sections/components/SectionForm"
import { SectionFormValidation } from "src/sections/validations"

const NewSectionPage = () => {
  const router = useRouter()
  const bookId = useParam("bookId", "string")!
  const chapterId = useParam("chapterId", "string")!
  const [createSectionMutation] = useMutation(createSection)

  return (
    <Layout title={"Create New Section"}>
      <div className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Create New Section</h1>

        <SectionForm
          submitText="Create Section"
          schema={SectionFormValidation}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const section = await createSectionMutation({
                ...values,
                chapterId,
              })
              await router.push(
                Routes.ShowBookPage({ bookId })
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
    </Layout>
  )
}

NewSectionPage.authenticate = true

export default NewSectionPage
