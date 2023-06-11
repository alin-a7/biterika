import { FC, ReactNode } from "react";

import Header from "../Header";
import Footer from "../Footer";

type LayotProps = {
  children: ReactNode;
};

const Layout: FC<LayotProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
