import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { createElement } from "../features/blocks/blocks-slice";
import { ITitleInput } from "../utils/interface";

export const TitlePopup = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<ITitleInput>({
    type: "title",
    titleText: "",
  });
  
  const [disabled, setDisabled] = useState(false)

  const isOpen = useAppSelector((state) => state.settings.titlePopup);

  const handlerTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTitle((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlerSubmitTitle = () => {
    dispatch(createElement(title))
    setDisabled(true)
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-popup menu-popup_title">
      <h2 className="menu-popup__title">Заполните поля шапки</h2>
      <div className="menu-popup__inputs-container">
        <div className="menu-popup__case">
          <input
            name="titleText"
            value={title.titleText}
            type="text"
            onChange={handlerTitleInput}
            className="menu-popup__input"
            placeholder="Названия сайта"
          />
        </div>
      </div>
      <div className="menu-popup__btn-container">
        <button
          type="submit"
          onClick={handlerSubmitTitle}
          className="menu-popup__ready-btn"
          disabled={disabled}
        >
          Готово ✔
        </button>
      </div>
    </div>
  );
};
