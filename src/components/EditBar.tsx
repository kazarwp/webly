import { memo } from "react";
import { useAppDispatch } from "../utils/reduxHooks";
import { openPopup } from "../features/settings/settings-slice";

export const EditBar = memo(() => {
  const dispatch = useAppDispatch();

  const handlerHeaderPopup = () => {
    dispatch(openPopup("headerPopup"));
  };

  const handlerCoverPopup = () => {
    dispatch(openPopup("coverPopup"))
  }

  const handlerTitlePopup = () => {
    dispatch(openPopup("titlePopup"))
  }
 
  return (
    <nav className="edit-menu">
      <ul className="edit-menu__list">
        <li className="edit-menu__element" onClick={() => handlerHeaderPopup()}>
          Шапка
        </li>
        <li className="edit-menu__element" onClick={() => handlerCoverPopup()}>Обложка</li>
        <li className="edit-menu__element" onClick={() => handlerTitlePopup()}>Заголовок</li>
        <li className="edit-menu__element">Текст</li>
        <li className="edit-menu__element">Изображение</li>
        <li className="edit-menu__element">Подвал</li>
      </ul>
    </nav>
  );
});
