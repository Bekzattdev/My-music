import React, { FC, ReactNode } from "react";
import ReduxProvider from "../providers/ReduxProvider";
interface RootLayoutClientProps {
  children: ReactNode;
}
const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default RootLayoutClient;
