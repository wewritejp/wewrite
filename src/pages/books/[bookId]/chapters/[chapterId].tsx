import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getChapter from "src/chapters/queries/getChapter";
import deleteChapter from "src/chapters/mutations/deleteChapter";

export const Chapter = () => {
  const router = useRouter();
  const chapterId = useParam("chapterId", "number");
  const bookId = useParam("bookId", "number");
  const [deleteChapterMutation] = useMutation(deleteChapter);
  const [chapter] = useQuery(getChapter, { id: chapterId });

  return (
    <>
      <Head>
        <title>Chapter {chapter.id}</title>
      </Head>

      <div>
        <h1>Chapter {chapter.id}</h1>
        <pre>{JSON.stringify(chapter, null, 2)}</pre>

        <Link
          href={Routes.EditChapterPage({
            bookId: bookId!,
            chapterId: chapter.id,
          })}
        >
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteChapterMutation({ id: chapter.id });
              await router.push(Routes.ChaptersPage({ bookId: bookId! }));
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

const ShowChapterPage = () => {
  const bookId = useParam("bookId", "number");

  return (
    <div>
      <p>
        <Link href={Routes.ChaptersPage({ bookId: bookId! })}>
          <a>Chapters</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Chapter />
      </Suspense>
    </div>
  );
};

ShowChapterPage.authenticate = true;
ShowChapterPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowChapterPage;
