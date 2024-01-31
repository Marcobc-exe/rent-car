import React, { FC } from "react";
// import styled from "styled-components";

type layoutProps = {
  children: React.ReactNode
}

export const Layout: FC<layoutProps> = ({ children }) => {
  // const ContainerLayout = styled.div`
  //   height: 90px;
  //   width: 100%;
  //   flex-shrink: 0;
  //   background-color: #fff;
  //   box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  // `

  return (
    <div style={{ display: "flex" }}>
      { children }
    </div>
  )
}