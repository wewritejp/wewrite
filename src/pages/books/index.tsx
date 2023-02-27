import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
import getBooks from "src/books/queries/getBooks";

const ITEMS_PER_PAGE = 100;

export const BooksList = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const [{ books, hasMore }] = usePaginatedQuery(getBooks, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={Routes.ShowBookPage({ bookId: book.id })}>
              <a>{book.title}</a>
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

const BooksPage = () => {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>

      <div className="p-2">
        <p>
          <Link href={Routes.NewBookPage()}>
            <a>Create Book</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <BooksList />
        </Suspense>
      </div>
    </Layout>
  );
};

export default BooksPage;
