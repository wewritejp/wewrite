import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";
import { useRouter } from "next/router";

import Layout from "src/core/layouts/Layout";
import getChapters from "src/chapters/queries/getChapters";

const ITEMS_PER_PAGE = 100;

export const ChaptersList = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const bookId = useParam("bookId", "number");
  const [{ chapters, hasMore }] = usePaginatedQuery(getChapters, {
    where: { book: { id: bookId! } },
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });

  return (
    <div>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={Routes.ShowChapterPage({ chapterId: chapter.id })}>
              <a>{chapter.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
};

const ChaptersPage = () => {
  const bookId = useParam("bookId", "number");

  return (
    <Layout>
      <Head>
        <title>Chapters</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewChapterPage({ bookId: bookId! })}>
            <a>Create Chapter</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ChaptersList />
        </Suspense>
      </div>
    </Layout>
  );
};

export default ChaptersPage;
