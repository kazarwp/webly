import { useCallback, useState } from "react";

import { Header } from "../components/Header";
import { EditBar } from "../components/EditBar";
import { HeaderPopup } from "../components/HeaderPopup";
import { EditField } from "../components/EditField";

export const EditPage = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpenPopup = (() => {
  //   setIsOpen(!isOpen);
  // });

  return (
    <>
      <Header />
      <EditBar />
      <HeaderPopup />
      <EditField />
    </>
  );
};
