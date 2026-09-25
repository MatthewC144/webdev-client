import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <div>
        <strong>Yu Chen</strong>
        <p style={{ fontSize: "12px", margin: "4px 0 12px 0", color: "#666" }}>
          From NEU.
        </p>
      </div>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/labs">Labs</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link></li>
        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">
          Chapter 1
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}