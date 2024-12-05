import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
interface layoutProps {
  children: ReactNode;
}
const LayoutSite: FC<layoutProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
