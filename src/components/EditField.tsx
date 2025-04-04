import { useAppSelector } from "../utils/reduxHooks";

import { HeaderElement } from "../UI/HeaderElement";
import {
  contentSelect,
  coverSelect,
  footerSelect,
  headerSelect,
  titleSelect,
} from "../features/blocks/blocks-slice";
import { CoverElement } from "../UI/CoverElement";
import { TitleElement } from "../UI/TitleElement";
import { ContentElement } from "../UI/ContentElement";
import { FooterElement } from "../UI/FooterElement";

export const EditField = () => {
  const headerProps = useAppSelector(headerSelect);
  const coverProps = useAppSelector(coverSelect);
  const titleProps = useAppSelector(titleSelect);
  const contentProps = useAppSelector(contentSelect)
  const footerProps = useAppSelector(footerSelect)

  return (
    <div className="edit-filed">
      {headerProps !== undefined && <HeaderElement />}
      {coverProps !== undefined && <CoverElement />}
      {titleProps !== undefined && <TitleElement />}
      {contentProps !== undefined && <ContentElement/>}
      {footerProps !== undefined && <FooterElement/>}
    </div>
  );
};
