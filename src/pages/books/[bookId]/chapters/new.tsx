import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useParam } from "@blitzjs/next";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import createChapter from "src/chapters/mutations/createChapter";
import { ChapterForm, FORM_ERROR } from "src/chapters/components/ChapterForm";

const NewChapterPage = () => {
  const router = useRouter();
  const bookId = useParam("bookId", "number");
  const [createChapterMutation] = useMutation(createChapter);

  return (
    <Layout title={"Create New Chapter"}>
      <h1>Create New Chapter</h1>

      <ChapterForm
        submitText="Create Chapter"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateChapter}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const chapter = await createChapterMutation({
              ...values,
              bookId: bookId!,
            });
            await router.push(
              Routes.ShowChapterPage({ bookId: bookId!, chapterId: chapter.id })
            );
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />

      <p>
        <Link href={Routes.ChaptersPage({ bookId: bookId! })}>
          <a>Chapters</a>
        </Link>
      </p>
    </Layout>
  );
};

NewChapterPage.authenticate = true;

export default NewChapterPage;
