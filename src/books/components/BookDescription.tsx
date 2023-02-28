import { Avatar } from "flowbite-react"
import BookTableOfContent from "./BookTableOfContent"

const BookDescription = ({ book }) => {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-12 format">
          <article>
            <h3 className="headline">{book.purpose}</h3>
            <div className="sentence">
              {book.content}
            </div>
          </article>
          <article>
            <h3 className="headline">Note</h3>
            <div className="sentence">
              {book.note}
            </div>
          </article>
          <article>
            <h3 className="headline">Table Of Content</h3>
            <BookTableOfContent book={book} />
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
