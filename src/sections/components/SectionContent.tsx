import Breadcrumb from "src/core/components/Breadcrumb";
import useCalculateHeight from "src/core/hooks/useCalculateHeight";

const SectionContent = () => {
  const { remainingHeight } = useCalculateHeight();

  return (
    <div
      className="p-4 w-full md:overflow-y-scroll"
      style={{ height: remainingHeight }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <Breadcrumb
          items={[
            "books",
            "狂ってる！世界にあった危険な遊び３選【楽しく放射線・処刑ごっこ・人体破壊おもちゃ】狂ってる！",
          ]}
        />
        <div className="format">
          <h2 className="flex gap-4">
            <span className="bg-blue-800 text-white px-2 rounded whitespace-nowrap h-fit">2-1</span>
            <span>TypeScript と React で Unsplash 風アプリを作ろう</span>
          </h2>
          <div>
            <h3 className="headline">
              create-react-app ライブラリを使用して、React
              のアプリを立ち上げよう
            </h3>
            <p>React アプリのファイルを用意する</p>
            <p>まず初めに、この教材専用のフォルダを用意してください。</p>
            <p>
              筆者は、Desktop/workspace/配下にアプリケーションを作成しています。
            </p>
            <p>
              このページにある手順を終えると、最終的に
              Desktop/workspace/typescrash の配下に React
              のコードが出来上がります。
            </p>
            <h3 className="headline">node と npx の確認</h3>
            <p>まずは、node と npx がインストールされているか確認します。</p>
            <p>画面左上の「Terminal」から、ターミナルを開いてください。</p>
            <p>
              ターミナルを開いたら、次のコマンドを順に実行してください。 console
            </p>
            <p>
              両コマンドとも、次のようにバージョン数が表示されれば、インストール済みです。
            </p>
            <p>
              もしバージョン数表示されず、command not
              foundと表示される場合、以下のドキュメントを参考にして導入してください。
            </p>
            <p>参考サイト）node インストール参考記事 参考サイト）npx</p>
            <h3 className="headline">
              create-react-app を使って、React アプリを作成する
            </h3>
            <p>
              続いて、create-react-app ライブラリを使って React
              のアプリケーションを作成します。
            </p>
            <p>
              初めに作成した、この教材専用のフォルダで、次のコマンドを実行してください。
            </p>
            <p>これでインストールが完了しました。</p>
            <p>
              作成したアプリケーションのディレクトリに移動し、サーバーを立ち上げましょう。
            </p>
            <p>
              次のコマンドを順に実行してください。 console cd typescrash yarn
              start
            </p>
            <p>
              localhost:3000 にアクセスして、以下の画面が立ち上がれば成功です！
            </p>
            <p>Control + C を押すとサーバーを落とすことができます。</p>
            <h3 className="headline">node とは？</h3>
            <p>
              本教材では npm を使うため、Node.js
              がインストールされているか最初に確認しました。 Node.js
              とは、Chrome の V8 JavaScript エンジン で動作する JavaScript
              環境です。 サーバー側の JavaScript
              ランタイム環境であり、サーバー側の JavaScript を実行します。
              Node.js
              が生まれた背景はこちらの質問の一番最初の回答によくまとまっているので、興味のある方は読んでみてください。
            </p>
            <h3 className="headline">create-react-app とは？</h3>
            <p>
              create-react-app とは、React
              を最初に学ぶときに便利なライブラリです。 小さな React
              アプリに向いています。 README
              に向いている使い方が記載されているので、読んでみてください。
            </p>
            <p>このページは、公式ドキュメントを参考に作成しました。</p>
            <a>https://ja.reactjs.org/docs/create-a-new-react-app.html</a>
            <p>このパートは以上です。お疲れ様でした。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
