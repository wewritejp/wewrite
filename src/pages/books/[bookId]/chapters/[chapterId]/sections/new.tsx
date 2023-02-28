import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useParam } from "@blitzjs/next";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import createSection from "src/sections/mutations/createSection";
import { SectionForm, FORM_ERROR } from "src/sections/components/SectionForm";

const NewSectionPage = () => {
  const router = useRouter();
  const bookId = useParam("bookId", "number");
  const [createSectionMutation] = useMutation(createSection);

  return (
    <Layout title={"Create New Section"}>
      <h1>Create New Section</h1>

      <SectionForm
        submitText="Create Section"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateSection}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const section = await createSectionMutation({
              ...values,
              bookId: bookId!,
            });
            await router.push(
              Routes.ShowSectionPage({ bookId: bookId!, sectionId: section.id })
            );
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />
    </Layout>
  );
};

NewSectionPage.authenticate = true;

export default NewSectionPage;
