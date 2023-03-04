import { User } from "@prisma/client"
import { Avatar } from "flowbite-react"
import { FC } from "react"

type Props = {
  user: User
}

const BookAuthorProfile: FC<Props> = ({ user }) => {
  return (
    <div className="md:grid grid-cols-3 gap-4 p-2">
      <div className="flex flex-col">
        <Avatar size={"xl"} rounded img={user.imageUrl || ""} />
        <h4 className="mx-auto">{user.name}</h4>
      </div>
      <p className="col-span-2 py-4 sentence">
        { user.introduction ? user.introduction: 'There is no introduction.'}
      </p>
    </div>
  )
}

export default BookAuthorProfile
