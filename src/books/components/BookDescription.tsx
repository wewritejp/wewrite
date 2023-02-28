import { Avatar } from "flowbite-react"
import BookTableOfContent from "./BookTableOfContent"
import BookAuthorProfile from "./BookAuthorProfile"

const BookDescription = ({ book }) => {
  const items = [
    { headline: book.purpose, body: <div className="sentence">{book.content}</div> },
    { headline: "Note", body: <div className="sentence">{book.note}</div> },
    { headline: "Table Of Content", body: <BookTableOfContent book={book} /> },
    {
      headline: "Author",
      body: <BookAuthorProfile user={book.user} />,
    },
  ]

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-12 format">
          {items.map((item) => (
            <article>
              <h3 className="headline">{item.headline}</h3>
              {item.body}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookDescription
