import { contentSelect } from "../features/blocks/blocks-slice";
import { useAppSelector } from "../utils/reduxHooks";

export const ContentElement = () => {
  const content = useAppSelector(contentSelect);

  if (!content) return null;

  return (
    <div className="content">
      {content.map((element, index) => {
        return (
          <div key={index}>
            <p
              style={{
                fontSize: `${element.size}px`,
                fontWeight: `${element.weight}`,
              }}
            >
              {element.text}
            </p>
            {element.src ? (
              <div className="content__container">
                <img
                  className="contet__img"
                  src={element.src}
                  style={{ height: `${element.height}px` }}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
