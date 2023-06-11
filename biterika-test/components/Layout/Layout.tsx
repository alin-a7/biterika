import { FC, ReactNode } from "react";
import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";

type LayotProps = {
  children: ReactNode;
};

const Layout: FC<LayotProps> = ({ children }) => {
  return (
    <>
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
      <main >
        <Header />
        <main>{children}</main>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
