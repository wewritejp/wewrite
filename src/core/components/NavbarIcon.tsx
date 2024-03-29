import { useMutation } from "@blitzjs/rpc"
import { Avatar, Dropdown } from "flowbite-react"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useRouter } from "next/router"
import { Routes } from "@blitzjs/next"

const NavbarIcon = () => {
  const currentUser = useCurrentUser()
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)
  const handleLogout = async () => {
    await logoutMutation()
    await router.push("/")
  }

  return (
    <>
      {currentUser && (
        <Dropdown
          label={
            <div className="h-10 w-10">
              <Avatar img={currentUser.imageUrl || ""} className="rounded-full border" rounded />
            </div>
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">{currentUser?.name}</span>
            <span className="block truncate text-sm font-medium">{currentUser?.email}</span>
          </Dropdown.Header>
          <Dropdown.Item
            onClick={() => router.push(Routes.MyDraftBooksPage())}
          >
            Drafts
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => router.push(Routes.EditUserPage({ userId: currentUser.id }))}
          >
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      )}
    </>
  )
}

export default NavbarIcon
