import { useAppSelector } from "../utils/reduxHooks";

import { HeaderElement } from "../UI/HeaderElement";
import { coverSelect, headerSelect } from "../features/blocks/blocks-slice";
import { CoverElement } from "../UI/CoverElement";

export const EditField = () => {
  const headerProps = useAppSelector(headerSelect);
  const coverProps = useAppSelector(coverSelect)

  return (
    <div className="edit-filed">
      {headerProps !== undefined && <HeaderElement />}
      {coverProps !== undefined && <CoverElement />}
    </div>
  );
};
