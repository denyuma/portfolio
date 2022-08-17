import Image from "next/image";
import Link from "next/link";

const ProfileImage = (): JSX.Element => (
  <div className="my-6 border-2 shadow-2xl border-gray-700 rounded-full w-[200px] h-[200px]">
    <Image
      src="/profileImage.jpeg"
      width="200"
      height="200"
      className="rounded-full "
    />
  </div>
);

type IconWithLinkType = {
  src: string;
  href: string;
  width: string;
  height: string;
};

const IconWithLink = ({
  src,
  href,
  width,
  height,
}: IconWithLinkType): JSX.Element => (
  <Link href={href}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full cursor-pointer "
    >
      <Image src={src} width={width} height={height} />
    </a>
  </Link>
);

const MyCard = (): JSX.Element => (
  <div className="flex flex-col items-center max-w-5xl my-12 mx-auto border shadow-xl rounded-xl ">
    <ProfileImage />
    <h3 className="font-bold text-xl">DEN YUMA(ODEN)</h3>
    <h4 className="my-2 text-lg">Student, Software Engineer</h4>
    <div className="flex gap-4">
      <div className="mt-1">
        <IconWithLink
          src="/githubIcon.png"
          href="https://github.com/denyuma"
          width="40"
          height="40"
        />
      </div>

      <IconWithLink
        src="/qiitaIcon.png"
        href="https://qiita.com/kyami417"
        width="50"
        height="50"
      />
    </div>
  </div>
);

export default MyCard;
