import { useState } from "react";
import { useAppSelector } from "../utils/reduxHooks";
import { useAppDispatch } from "../utils/reduxHooks";
import { createElement } from "../features/blocks/blocks-slice";
import { ICoverInput } from "../utils/interface";

export const CoverPopup = () => {
  const dispatch = useAppDispatch()
  const [inputCoverPopup, setInputCoverPopup] = useState<ICoverInput>({
    type: "cover",
    height: "",
    src: "",
  });

  const isOpen = useAppSelector((state) => state.settings.coverPopup)

  const handlerInputsPopup = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputCoverPopup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handlerSubmitCover = () => {
    dispatch(createElement(inputCoverPopup))
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-popup menu-popup_cover">
      <h2 className="menu-popup__title">Заполните поля шапки</h2>
      <div className="menu-popup__inputs-container">
        <div className="menu-popup__case">
          <input
            name="height"
            value={inputCoverPopup.height}
            type="text"
            className="menu-popup__input"
            placeholder="Высота обложки"
            onChange={handlerInputsPopup}
          />
          <input
            name="src"
            value={inputCoverPopup.src}
            type="text"
            className="menu-popup__input"
            placeholder="Ссылка на обложку"
            onChange={handlerInputsPopup}
          />
        </div>
      </div>
      <div className="menu-popup__btn-container">
        <button type="submit" className="menu-popup__ready-btn" onClick={() => handlerSubmitCover()}>
          Готово ✔
        </button>
      </div>
    </div>
  );
};
