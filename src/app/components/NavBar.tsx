import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import copyToClipboard from "/public/scripts/copyToClipboard.js";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-3 items-center">
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
            href="https://github.com/ryanfurrer"
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
          className="cursor-pointer hover:underline"
          title="ryandotfurrer@gmail.com"
          onClick={copyToClipboard}
        >
          Email Me
        </li>
      </ul>
    </nav>
  );
}
