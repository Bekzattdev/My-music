'use client'
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
interface ReduxProviderType {
  children: ReactNode;
}
const ReduxProvider: FC<ReduxProviderType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
