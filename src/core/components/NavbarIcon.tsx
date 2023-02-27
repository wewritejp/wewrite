import { Avatar, Dropdown } from "flowbite-react"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"

const NavbarIcon = () => {
  const currentUser = useCurrentUser()

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
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

export default NavbarIcon
