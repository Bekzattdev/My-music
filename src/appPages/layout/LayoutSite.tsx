import { FC, ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
interface layoutProps {
  children: ReactNode;
}
const LayoutSite: FC<layoutProps> = ({ children }) => {
  return (
    <div >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
