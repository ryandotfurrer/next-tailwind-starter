import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import copyEmailTitle from "../../../public/copyEmailTitle";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <div id="logo-container" className="mr-auto">
          <li className="justify-start">
            <Link className="no-underline" href="/">
              <Image
                className="rounded-full"
                src={logo}
                width={65}
                height={65}
                alt="next logo"
                priority
              />
            </Link>
          </li>
        </div>
        <li>
          <Link
            className="no-underline hover:underline"
            href="https://github.com/ryanfurrer/next-tailwind-starter"
            target="_blank"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="no-underline hover:underline"
            href="https://ryanfurrer.com"
            target="_blank"
          >
            Portfolio
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-neutral-900  hover:underline dark:hover:text-neutral-100"
          title="ryandotfurrer@gmail.com"
          onClick={copyEmailTitle}
        >
          Email Me
        </li>
      </ul>
    </nav>
  );
}
