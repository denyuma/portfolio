import Link from "next/link";
import HomeIcon from "../../public/homeIcon.svg";

const Navigation = (): JSX.Element => (
  <header className="py-6 px-10 border-b-2 border-gray-400 shadow ">
    <Link href="/">
      <HomeIcon className="cursor-pointer" />
    </Link>
  </header>
);

export default Navigation;
