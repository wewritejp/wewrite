import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getSection from "src/sections/queries/getSection";
import updateSection from "src/sections/mutations/updateSection";
import { SectionForm, FORM_ERROR } from "src/sections/components/SectionForm";

export const EditSection = () => {
  const router = useRouter();
  const sectionId = useParam("sectionId", "number");
  const bookId = useParam("bookId", "number");
  const [section, { setQueryData }] = useQuery(
    getSection,
    { id: sectionId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updateSectionMutation] = useMutation(updateSection);

  return (
    <>
      <Head>
        <title>Edit Section {section.id}</title>
      </Head>

      <div>
        <h1>Edit Section {section.id}</h1>
        <pre>{JSON.stringify(section, null, 2)}</pre>

        <SectionForm
          submitText="Update Section"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateSection}
          initialValues={section}
          onSubmit={async (values) => {
            try {
              const updated = await updateSectionMutation({
                id: section.id,
                ...values,
              });
              await setQueryData(updated);
              await router.push(
                Routes.ShowSectionPage({
                  bookId: bookId!,
                  sectionId: updated.id,
                })
              );
            } catch (error: any) {
              console.error(error);
              return {
                [FORM_ERROR]: error.toString(),
              };
            }
          }}
        />
      </div>
    </>
  );
};

const EditSectionPage = () => {
  const bookId = useParam("bookId", "number");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSection />
      </Suspense>

      <p>
        <Link href={Routes.SectionsPage({ bookId: bookId! })}>
          <a>Sections</a>
        </Link>
      </p>
    </div>
  );
};

EditSectionPage.authenticate = true;
EditSectionPage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditSectionPage;
