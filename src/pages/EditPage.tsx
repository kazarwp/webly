import { useState } from "react";

import { Header } from "../components/Header";
import { EditBar } from "../components/EditBar";
import { MenuPopup } from "../components/MenuPopup";

export const EditPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <EditBar handleOpenPopup={handleOpenPopup} />
      <MenuPopup isOpen={isOpen} />
    </>
  );
};
