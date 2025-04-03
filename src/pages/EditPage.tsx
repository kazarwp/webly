import { Header } from "../components/Header";
import { EditBar } from "../components/EditBar";
import { HeaderPopup } from "../components/HeaderPopup";
import { EditField } from "../components/EditField";
import { CoverPopup } from "../components/CoverPopup";
import { TitlePopup } from "../components/TitlePopup";
import { TextPopup } from "../components/ContentPopup";

export const EditPage = () => {
  return (
    <>
      <Header />
      <EditBar />
      <HeaderPopup />
      <CoverPopup />
      <TitlePopup />
      <TextPopup />
      <EditField />
    </>
  );
};
