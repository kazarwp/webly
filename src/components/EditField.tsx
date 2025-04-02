import { useAppSelector } from "../utils/reduxHooks";

import { HeaderElement } from "../UI/HeaderElement";
import {
  coverSelect,
  headerSelect,
  titleSelect,
} from "../features/blocks/blocks-slice";
import { CoverElement } from "../UI/CoverElement";
import { TitleElement } from "../UI/TitleElement";

export const EditField = () => {
  const headerProps = useAppSelector(headerSelect);
  const coverProps = useAppSelector(coverSelect);
  const titleProps = useAppSelector(titleSelect);

  return (
    <div className="edit-filed">
      {headerProps !== undefined && <HeaderElement />}
      {coverProps !== undefined && <CoverElement />}
      {titleProps !== undefined && <TitleElement />}
    </div>
  );
};
