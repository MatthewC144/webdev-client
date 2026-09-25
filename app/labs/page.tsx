import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Yu Chen</h2>
      <a
        id="wd-github"
        href="https://github.com/MatthewC144/webdev-client"
      >
        GitHub Repository
      </a>

      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link id="wd-lab4-link" href="/labs/lab4">Lab 4: New Lab</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5: Express REST APIs</Link>
        </li>
        <li>
          <Link href="/">Kambaz</Link>
        </li>
      </ul>
    </div>
  );
}
