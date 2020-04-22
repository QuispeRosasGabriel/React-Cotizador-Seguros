import React from "react";
import { ContenedorHeader } from "../styledcomponents/ContenedorHeader";
import { TextoHeader } from "../styledcomponents/TextoHeader";

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

export default Header;
