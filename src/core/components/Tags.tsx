import { Button } from "flowbite-react"
import { FC } from "react"

type Props = {
  items: string[]
}

const Tags: FC<Props> = ({ items }) => {
  return (
    <div className="flex gap-1">
      {items.map((item, index) => (
        <div key={index}>
          <Button size={"xs"} color={"light"}>
            {item}
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Tags
