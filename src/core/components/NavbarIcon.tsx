import { useMutation } from "@blitzjs/rpc"
import { Avatar, Dropdown } from "flowbite-react"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"

const NavbarIcon = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  const handleLogout = async () => {
    await logoutMutation()
  }

  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
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
