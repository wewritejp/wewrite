import { BlitzPage } from "@blitzjs/next"
import { User } from "@prisma/client"
import { gSSP } from "src/blitz-server"
import getUser from "src/users/queries/getUser"

type Props = {
  user: User
}

export const getServerSideProps = gSSP(async ({ query, ctx }) => {
  const id = query.userId as string
  const user = await getUser({ id }, ctx)
  const isMe = ctx.session.userId == id

  return { props: { user }, notFound: !isMe }
})

const EditUserPage: BlitzPage<Props> = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
    </div>
  )
}

EditUserPage.authenticate = true

export default EditUserPage
