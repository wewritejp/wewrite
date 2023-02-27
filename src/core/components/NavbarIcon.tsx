import { useMutation } from "@blitzjs/rpc"
import { Dropdown } from "flowbite-react"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import Gravatar from "react-gravatar"
import { useRouter } from "next/router"

const NavbarIcon = () => {
  const currentUser = useCurrentUser()
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)
  const handleLogout = async () => {
    await logoutMutation()
    router.push('/')
  }

  return (
    <Dropdown
      label={
        <div className="h-10 w-10">
          <Gravatar email={currentUser?.email} className="rounded-full" />
        </div>
      }
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Header>
        <span className="block text-sm">{currentUser?.name}</span>
        <span className="block truncate text-sm font-medium">{currentUser?.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

export default NavbarIcon
