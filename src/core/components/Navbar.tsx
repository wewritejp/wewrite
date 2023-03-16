import { Routes } from "@blitzjs/next"
import { Navbar as FlowbiteNavbar, Button, Avatar } from "flowbite-react"
import Link from "next/link"
import { Suspense } from "react"
import { useIsSignedIn } from "src/users/hooks/useIsSignedIn"
import NavbarIcon from "./NavbarIcon"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const isSignedIn = useIsSignedIn()

  return (
    <FlowbiteNavbar fluid={true} id="navbar" className="border-b">
      <Link href="/">
        <a className="flex h-10">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9 my-auto"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WeWrite
          </span>
        </a>
      </Link>
      <FlowbiteNavbar.Collapse>
        <Link href={Routes.Home()}>
          <a className={`${router.pathname == "/" && "text-blue-700"} p-1`}>Home</a>
        </Link>
        <Link href={Routes.BooksPage()}>
          <a className={`${router.pathname == "/books" && "text-blue-700"} p-1`}>Books</a>
        </Link>
      </FlowbiteNavbar.Collapse>
      <div className="flex md:order-2 gap-4 ml-auto md:m-0">
        {isSignedIn ? (
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
