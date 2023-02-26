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
              <p>
                今日、フロントエンドの開発では、多くのプロジェクトがTypeScriptとReactを採用しています。2022年では、フロントエンド界隈でReactが最も人気があったという調査結果が出ています。
              </p>
              <a href="https://tsh.io/state-of-frontend/#which-of-the-following-libraries-would-you-like-to-learn-in-the-future">
                https://tsh.io/state-of-frontend/#which-of-the-following-libraries-would-you-like-to-learn-in-the-future
              </a>
              <p>
                また、「昨年TypeScriptを使用しましたか」という質問に対し、 84.1%
                の人が「使用した」と答えました。
              </p>
              <a
                href="
            https://tsh.io/state-of-frontend/#over-last-year-have-you-used-typescript
            "
              >
                https://tsh.io/state-of-frontend/#over-last-year-have-you-used-typescript
              </a>
              <p>
                Reactだけでも学習が難しいのに、そこにTypeScriptの書き方まで入ってくると、どの部分がReactの構文で、どの部分がTypeScriptの構文なのか、初学者には見分けがつきません。筆者も昔そうでした。
              </p>
              <p>
                この教材では、検索ボックスから画像の一覧を取得するだけの簡単なアプリケーションを作ります。
              </p>
              <p>
                そのアプリケーション開発を通して、Reactが近年どのように書き方が変わってきたのか（クラスコンポーネントから関数コンポーネント・Hooksを使った書き換え）、Reactの基本的な書き方を学びます。
              </p>
              <p>
                最後に、アプリケーションにTypeScriptを導入し、TypeScriptの基本的な構文、TypeScriptを導入するとどのように開発が便利になるのか学びます。
              </p>
              <p>
                この教材を1周すれば、どこまでがReactでどこからがTypeScriptなのかを理解することができ、今後の学習を加速させてくれることでしょう。
              </p>
            </div>
          </article>
          <article>
            <h3 className="headline">Note</h3>
            <div>
              <p>この教材には政治的な思想が一部含まれています</p>
              <p>また、戦争に関する写真も含まれています</p>
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
                <h4 className="mx-auto">higakijin</h4>
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
