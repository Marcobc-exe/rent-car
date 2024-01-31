import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";

type layoutProps = {
  children: React.ReactNode
}

export const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}