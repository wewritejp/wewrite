import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getChapter from "src/chapters/queries/getChapter";
import updateChapter from "src/chapters/mutations/updateChapter";
import { ChapterForm, FORM_ERROR } from "src/chapters/components/ChapterForm";

export const EditChapter = () => {
  const router = useRouter();
  const chapterId = useParam("chapterId", "number");
  const bookId = useParam("bookId", "number");
  const [chapter, { setQueryData }] = useQuery(
    getChapter,
    { id: chapterId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updateChapterMutation] = useMutation(updateChapter);

  return (
    <>
      <Head>
        <title>Edit Chapter {chapter.id}</title>
      </Head>

      <div>
        <h1>Edit Chapter {chapter.id}</h1>
        <pre>{JSON.stringify(chapter, null, 2)}</pre>

        <ChapterForm
          submitText="Update Chapter"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateChapter}
          initialValues={chapter}
          onSubmit={async (values) => {
            try {
              const updated = await updateChapterMutation({
                id: chapter.id,
                ...values,
              });
              await setQueryData(updated);
              await router.push(
                Routes.ShowChapterPage({
                  bookId: bookId!,
                  chapterId: updated.id,
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

const EditChapterPage = () => {
  const bookId = useParam("bookId", "number");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditChapter />
      </Suspense>

      <p>
        <Link href={Routes.ChaptersPage({ bookId: bookId! })}>
          <a>Chapters</a>
        </Link>
      </p>
    </div>
  );
};

EditChapterPage.authenticate = true;
EditChapterPage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditChapterPage;
