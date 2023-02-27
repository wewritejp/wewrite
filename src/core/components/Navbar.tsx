import { Routes } from "@blitzjs/next"
import { Navbar as FlowbiteNavbar, Button, Avatar } from "flowbite-react"
import Link from "next/link"
import { Suspense } from "react"
import { useIsSignedIn } from "src/users/hooks/useIsSignedIn"
import NavbarIcon from "./NavbarIcon"

const Navbar = () => {
  const isSignedIn = useIsSignedIn()

  return (
    <FlowbiteNavbar fluid={true} id="navbar">
      <Link href="/">
        <a className="flex">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WeWrite
          </span>
        </a>
      </Link>
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="#" active={true}>
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">About</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Services</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Pricing</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Contact</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
      <div className="flex md:order-2 gap-4">
        { isSignedIn? (
          <Suspense fallback={<Avatar rounded />}>
            <NavbarIcon />
          </Suspense>
        ) : (
          <>
            <Link href={Routes.LoginPage()}>
              <Button color="gray">Login</Button>
            </Link>
            <Link href={Routes.SignupPage()}>
              <Button color="gray">Register</Button>
            </Link>
          </>
        )}
        <FlowbiteNavbar.Toggle />
      </div>
    </FlowbiteNavbar>
  )
}

export default Navbar
