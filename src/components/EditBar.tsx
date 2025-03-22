interface IEditBar {
  handleOpenPopup: () => void;
}

export const EditBar = ({ handleOpenPopup }: IEditBar) => {
  return (
    <nav className="edit-menu">
      <ul className="edit-menu__list">
        <li className="edit-menu__element" onClick={() => handleOpenPopup()}>
          Шапка
        </li>
        <li className="edit-menu__element">Обложка</li>
        <li className="edit-menu__element">Заголовок</li>
        <li className="edit-menu__element">Текст</li>
        <li className="edit-menu__element">Изображение</li>
        <li className="edit-menu__element">Кнопка</li>
        <li className="edit-menu__element">Подвал</li>
      </ul>
    </nav>
  );
};
