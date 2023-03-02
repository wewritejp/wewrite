import { BlitzPage } from "@blitzjs/auth"
import { Routes } from "@blitzjs/next"
import { Book } from "@prisma/client"
import { Button } from "flowbite-react"
import Link from "next/link"
import { gSSP } from "src/blitz-server"
import BookCard from "src/books/components/BookCard"
import getBooks from "src/books/queries/getBooks"
import Footer from "src/core/components/Footer"
import Layout from "src/core/layouts/Layout"
import { ImBook } from "react-icons/im"
import { BsLightbulb } from "react-icons/bs"
import { MdEmojiPeople } from "react-icons/md"

type Props = {
  books: Book[]
}

export const getServerSideProps = gSSP(async ({ ctx }) => {
  const { books } = await getBooks({ take: 3 }, ctx)
  return { props: { books } }
})

const Home: BlitzPage<Props> = ({ books }) => {
  return (
    <Layout title="Home">
      <section className="relative bg-[url(https://pds.exblog.jp/pds/1/202102/05/63/f0347663_14193922.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Learn from history,
              <strong className="block font-extrabold text-blue-700">Create Future.</strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              WeWrite is an application which provide high quality article about histroy. Check many
              articles!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link href={Routes.BooksPage()}>
                <Button>Find articles</Button>
              </Link>

              <Link href={Routes.LoginPage()}>
                <Button color="light">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20 flex flex-col gap-8">
        <h1 className="mx-auto text-4xl font-bold text-blue-700">Popular Articles</h1>
        <div className="max-w-5xl grid md:grid-cols-3 gap-8 mx-auto py-10 px-4">
          {books.map((book, bookIndex) => (
            <BookCard key={bookIndex} book={book} />
          ))}
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="items-end justify-between sm:flex">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight">Our Features</h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <blockquote className="flex h-full flex-col justify-between bg-white p-12">
              <div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-blue-700 sm:text-2xl">
                    <ImBook className="text-3xl" />
                    Interesting Articles
                  </h3>

                  <p className="mt-4 text-gray-600">WeWrite has a lot of articles!</p>
                </div>
              </div>
            </blockquote>
            <blockquote className="flex h-full flex-col justify-between bg-white p-12">
              <div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-blue-700 sm:text-2xl">
                    <BsLightbulb className="text-3xl" />
                    Write knowledge
                  </h3>

                  <p className="mt-4 text-gray-600">Share your knowledge!</p>
                </div>
              </div>
            </blockquote>
            <blockquote className="flex h-full flex-col justify-between bg-white p-12">
              <div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-blue-700 sm:text-2xl">
                    <MdEmojiPeople className="text-3xl" />
                    Enjoy everything
                  </h3>

                  <p className="mt-4 text-gray-600">{"Let's start WeWrite!"}</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export default Home
