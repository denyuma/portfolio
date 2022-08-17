import { ReactNode } from "react";

type ListLayoutType = {
  title: string;
  children: ReactNode;
};

const ListLayout = ({ title, children }: ListLayoutType): JSX.Element => (
  <div className="max-w-5xl mx-auto my-10 border-b-2 border-gray-200">
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="my-10">{children}</div>
  </div>
);

export default ListLayout;
