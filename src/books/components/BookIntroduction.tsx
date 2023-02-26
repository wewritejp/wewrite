// import Breadcrumb from "@/core/components/Breadcrumb";
// import Tags from "@/core/components/Tags";
import { Avatar, Rating } from "flowbite-react"
import Image from "next/image"

const BookIntroduction = ({ book }) => {
  return (
    <section className="min-h-96 bg-blue-800">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-4 text-white">
        {/* <Breadcrumb items={["books"]} isTextWhite/> */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className=" text-2xl font-bold">{book.title}</h1>
          </div>
          <div className="flex">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-200">4.95 (30)</p>
            </Rating>
            <Avatar rounded className="ml-auto text-sm" size={"sm"}>
              higakijin
            </Avatar>
          </div>
          <div className="flex-row md:grid md:grid-cols-12 gap-8">
            <div className="pb-4 md:col-span-5">
              <Image
                src="https://i.ytimg.com/vi/-UjD_YrVhUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-Jl1S1fLGAmlaj_7Jg8oE7dXCmw"
                alt="thubnail"
                width={4000}
                height={2000}
              />
            </div>
            <h2 className="md:col-span-7">
              ぴろすけは北海道なので学校で積りまくった雪山をどれだけ一番高い場所からジャンプして着地出来るかや、体育館に生えてるあり得ないくらいに成長した氷柱を折って落とす等やりました！
              今考えると下手したら死ぬぜ！？っていうのばかりですねw
              あと身軽だった頃は、友人に肩車されながらチャリ乗ったりして、はしゃいでましたがこれは危険な上にSNSにアップしたらバカッター認定で炎上案件ですね(￣▽￣;)
              うちのチャンネルの視聴者は僕らよりも先輩の方が多いので、良かったら今思うと危な過ぎた遊びをコメントで教えてください！
              それと公式の切り抜きチャンネルが生まれたので良かったら登録して下さい！切り抜きオリジナルのエピソードも話してます！
            </h2>
          </div>
          <div className="flex">
            {/* <Tags items={["hogehoge", "foobar"]} /> */}
            <p className="ml-auto text-xs mt-auto">Last updated at 2023.01.21</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookIntroduction
