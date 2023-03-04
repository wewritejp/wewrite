import { BlitzPage } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import { User } from "@prisma/client"
import { gSSP } from "src/blitz-server"
import Footer from "src/core/components/Footer"
import Layout from "src/core/layouts/Layout"
import { FORM_ERROR, UserForm } from "src/users/components/UserForm"
import updateUser from "src/users/mutations/updateUser"
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
  const [updateUserMutation] = useMutation(updateUser)
  return (
    <Layout title={user.name}>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold">Edit ‘‘{user.name}‘‘</h1>

        <UserForm
          submitText="Update Profile"
          // schema={UpdateUser}
          initialValues={user}
          onSubmit={async (values) => {
            try {
              await updateUserMutation({ ...values })
            } catch (error: any) {
              console.log(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
      <Footer />
    </Layout>
  )
}

EditUserPage.authenticate = true

export default EditUserPage
