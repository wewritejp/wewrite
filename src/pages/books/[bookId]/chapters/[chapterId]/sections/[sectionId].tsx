import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getSection from "src/sections/queries/getSection";
import deleteSection from "src/sections/mutations/deleteSection";

export const Section = () => {
  const router = useRouter();
  const sectionId = useParam("sectionId", "number");
  const bookId = useParam("bookId", "number");
  const [deleteSectionMutation] = useMutation(deleteSection);
  const [section] = useQuery(getSection, { id: sectionId });

  return (
    <>
      <Head>
        <title>Section {section.id}</title>
      </Head>

      <div>
        <h1>Section {section.id}</h1>
        <pre>{JSON.stringify(section, null, 2)}</pre>

        <Link
          href={Routes.EditSectionPage({
            bookId: bookId!,
            sectionId: section.id,
          })}
        >
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              // await deleteSectionMutation({ id: section.id });
              // await router.push(Routes.SectionsPage({ bookId: bookId! }));
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

const ShowSectionPage = () => {
  const bookId = useParam("bookId", "number");

  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        <Section />
      </Suspense>
    </div>
  );
};

ShowSectionPage.authenticate = true;
ShowSectionPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowSectionPage;
