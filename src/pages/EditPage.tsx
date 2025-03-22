import { useState } from "react";
import { useAppSelector } from "../utils/reduxHooks";

import { Header } from "../components/Header";
import { EditBar } from "../components/EditBar";
import { HeaderPopup } from "../components/HeaderPopup";
import { HeaderElement } from "../UI/HeaderElement";

export const EditPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerProps = useAppSelector((state) => state.blocks.elements[0]);
  

  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <EditBar handleOpenPopup={handleOpenPopup} />
      <HeaderPopup isOpen={isOpen} />
      {headerProps !== undefined && <HeaderElement />}
    </>
  );
};
