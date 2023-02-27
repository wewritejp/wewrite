import { Avatar, Button } from "flowbite-react"
import Link from "next/link"
import { useRouter } from "next/router"

const BookDescription = ({ book }) => {
  const router = useRouter()
  const { bookId } = router.query

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-12 format">
          <article>
            <h3 className="headline">{book.purpose}</h3>
            <div>
              {book.content}
            </div>
          </article>
          <article>
            <h3 className="headline">Note</h3>
            <div>
              {book.note}
            </div>
          </article>
          <article>
            <h3 className="headline">Table Of Content</h3>
            <div className="flex flex-col gap-8 py-2">
              <div className="flex flex-col gap-2">
                <div className="flex pb-4">
                  <h3 className="text-blue-800 w-28 my-auto">Section 0</h3>
                  <h4 className="my-auto">はじめに</h4>
                </div>
                <div className="border-b pb-4 mb-2 text-black flex">
                  <span>0-1 TypeScript と React で Unsplash 風アプリを作ろう</span>
                  <div className="ml-auto">
                    <Link href={`/books/${bookId}/chapters/1`}>
                      <Button size={"xs"}>SAMPLE</Button>
                    </Link>
                  </div>
                </div>
                <div className="border-b pb-4 mb-2 text-black flex">
                  <span>0-2 VSCode のインストール</span>
                  <div className="ml-auto">
                    <Link href={`/books/${bookId}/chapters/1`}>
                      <Button size={"xs"}>SAMPLE</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex pb-4">
                  <h3 className="text-blue-800 w-28 my-auto">Section 1</h3>
                  <h4 className="my-auto">TypeScriptとReactの開発について知ろう</h4>
                </div>
                <div className="border-b pb-4 mb-2 text-black">
                  0-1 TypeScript と React で Unsplash 風アプリを作ろう
                </div>
                <div className="border-b pb-4 mb-2 text-black">0-2 VSCode のインストール</div>
              </div>
            </div>
          </article>
          <article>
            <h3 className="headline">Author</h3>
            <div className="flex gap-4 p-2">
              <div className="flex flex-col gap-2">
                <Avatar size={"xl"} rounded />
                <h4 className="mx-auto">{book.user.name}</h4>
              </div>
              <p className="my-auto">
                現在は教育業界でサーバーサイド・フロントエンドエンジニアとして働きながら、休日は個人サービスの開発を楽しんでいます。RubyとVimがとっても好きです。Twitterアカウント：@rails_java_like
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default BookDescription
