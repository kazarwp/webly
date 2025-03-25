import { useAppSelector } from "../utils/reduxHooks";

import { HeaderElement } from "../UI/HeaderElement";

export const EditField = () => {
  const headerProps = useAppSelector((state) => state.blocks.elements[0]);
  
  return (
    <div className="edit-filed">
      {headerProps !== undefined && <HeaderElement />}
    </div>
  );
};
