import { Breadcrumb as FlowbiteBreadcrumb } from "flowbite-react";
import { FC } from "react";

type Props = {
  items: string[];
  isTextWhite?: boolean;
};

const Breadcrumb: FC<Props> = ({ items, isTextWhite }) => {
  const itemsWithHome = ["WeWrite", ...items];
  return (
    <FlowbiteBreadcrumb aria-label="Default FlowbiteBreadcrumb example" className="truncate">
      {itemsWithHome.map((item, index) => (
        <FlowbiteBreadcrumb.Item key={index}>
          <p className={isTextWhite ? "text-gray-200" : ""}>{item}</p>
        </FlowbiteBreadcrumb.Item>
      ))}
    </FlowbiteBreadcrumb>
  );
};

export default Breadcrumb;
