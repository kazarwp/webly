import { useAppSelector } from "../utils/reduxHooks";

import { HeaderElement } from "../UI/HeaderElement";
import { elementSelect } from "../features/blocks/blocks-slice";
import { CoverElement } from "../UI/CoverElement";
import { TitleElement } from "../UI/TitleElement";
import { ContentElement } from "../UI/ContentElement";
import { FooterElement } from "../UI/FooterElement";
import {
  ICoverInput,
  IFooterInput,
  IHeaderInput,
  ITextInput,
  ITitleInput,
} from "../utils/interface";

export const EditField = () => {
  const headerProps = useAppSelector((state) =>
    elementSelect<IHeaderInput>(state, "header")
  );
  const coverProps = useAppSelector((state) =>
    elementSelect<ICoverInput>(state, "cover")
  );
  const titleProps = useAppSelector((state) =>
    elementSelect<ITitleInput>(state, "title")
  );
  const contentProps = useAppSelector((state) =>
    elementSelect<ITextInput>(state, "text")
  );
  const footerProps = useAppSelector((state) =>
    elementSelect<IFooterInput>(state, "footer")
  );

  return (
    <div className="edit-filed">
      {headerProps !== undefined && <HeaderElement />}
      {coverProps !== undefined && <CoverElement />}
      {titleProps !== undefined && <TitleElement />}
      {contentProps !== undefined && <ContentElement />}
      {footerProps !== undefined && <FooterElement />}
    </div>
  );
};
