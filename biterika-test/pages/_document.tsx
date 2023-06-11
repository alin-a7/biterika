import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Cabinet</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
        />
        <link
          media="all"
          rel="stylesheet"
          href="https://static.biterika.team/brobooster/assets/css/vendor.min.css"
        />
        <link
          media="all"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/css/intlTelInput.css"
        />
        <link
          media="all"
          rel="stylesheet"
          href="https://static.biterika.team/brobooster/assets/css/styles.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
