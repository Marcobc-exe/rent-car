import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { paths } from "../../constants/paths";
import {
  BtnForm,
  ContainerNavbar,
} from "../../styledComponents/NavbarStyled/navbarStyled";

export const Navbar = () => {
  const [isActive, setIsActive] = useState("formulario");

  const handleBtnStyle = (path: string): void => {
    setIsActive(path);
  };

  return (
    <ContainerNavbar>
      {paths.map((path) => (
        <Link
          key={path.id}
          id={path.id}
          to={path.to}
          className="link"
          onClick={() => handleBtnStyle(path.id)}
        >
          <BtnForm $active={isActive === path.id ? true : false}>
            <p className="txtPaths">{path.name}</p>
          </BtnForm>
        </Link>
      ))}
    </ContainerNavbar>
  );
};
