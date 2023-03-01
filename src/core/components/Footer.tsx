import { Footer as FlowbiteFooter } from "flowbite-react"
import Link from "next/link"
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs"

const Footer = () => {
  return (
    <FlowbiteFooter container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FlowbiteFooter.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="WeWrite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="about" />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow us" />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Terms & Conditions</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="WeWrite" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link href="https://github.com/wewritejp/wewrite">
              <a target="_blank">
                <BsGithub className="text-gray-500 h-5 w-5" />
              </a>
            </Link>
            <Link href="https://twitter.com/higakijin">
              <a target="_blank">
                <BsTwitter className="text-gray-500 h-5 w-5" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  )
}

export default Footer
