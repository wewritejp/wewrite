import { User } from "@prisma/client"
import { Avatar } from "flowbite-react"
import { FC } from "react"

type Props = {
  user: User
}

const BookAuthorProfile: FC<Props> = ({ user }) => {
  return (
    <div className="flex gap-4 p-2">
      <div className="flex flex-col gap-2">
        <Avatar size={"xl"} rounded />
        <h4 className="mx-auto">{user.name}</h4>
      </div>
      <p className="my-auto">
        現在は教育業界でサーバーサイド・フロントエンドエンジニアとして働きながら、休日は個人サービスの開発を楽しんでいます。RubyとVimがとっても好きです。Twitterアカウント：@rails_java_like
      </p>
    </div>
  )
}

export default BookAuthorProfile
