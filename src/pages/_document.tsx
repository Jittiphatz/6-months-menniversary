import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <header>
        <link rel="icon" href="/next-dot-js.svg" sizes="any" />
        <nav>
          <ul className="flex gap-6"></ul>
          <h1 className="py-2 font-bold">💖13 June 2024💖</h1>
        </nav>
      </header>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
