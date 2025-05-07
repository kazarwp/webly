import { elementSelect } from "../features/blocks/blocks-slice";
import { ITitleInput } from "../utils/interface";
import { useAppSelector } from "../utils/reduxHooks";

export const TitleElement = () => {
  const title = useAppSelector((state) =>
    elementSelect<ITitleInput>(state, "title")
  );

  if (!title) return null;

  return (
    <div className="title">
      <p className="title__text">{title.titleText}</p>
    </div>
  );
};
