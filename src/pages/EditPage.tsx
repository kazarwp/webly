import { Header } from "../components/Header";
import { EditBar } from "../components/EditBar";
import { HeaderPopup } from "../components/HeaderPopup";
import { EditField } from "../components/EditField";
import { CoverPopup } from "../components/CoverPopup";
import { TitlePopup } from "../components/TitlePopup";
import { ContentPopup } from "../components/ContentPopup";
import { FooterPopup } from "../components/FooterPopup";

export const EditPage = () => {
  return (
    <>
      <Header />
      <EditBar />
      <HeaderPopup />
      <CoverPopup />
      <TitlePopup />
      <ContentPopup />
      <FooterPopup />
      <EditField />
    </>
  );
};
