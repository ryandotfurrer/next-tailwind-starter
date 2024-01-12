import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        <small>
          Made by{" "}
          <Link
            href="https://ryanfurrer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ryan Furrer
          </Link>
        </small>
      </p>
    </footer>
  );
}
