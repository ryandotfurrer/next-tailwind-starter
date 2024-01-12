import Image from "next/image";
import next from "/public/next.svg";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <div id="logo-container" className="mr-auto">
          <li className="justify-start">
            <a className="no-underline" href="/">
              <Image
                className="dark:invert"
                src={next}
                width={100}
                height={100}
                alt="next logo"
              />
            </a>
          </li>
        </div>
        <li>
          <a className="no-underline" href="#">
            GitHub
          </a>
        </li>
        <li>
          <a className="no-underline" href="#">
            Portfolio
          </a>
        </li>
        <li>
          <a className="no-underline" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
