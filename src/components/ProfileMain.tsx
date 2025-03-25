import logoImage from "../assets/profile_logo.svg";

export const ProfileMain = () => {
  return (
    <div className="profile-container">
      {/* Логотип */}
      <img src={logoImage} alt="Логотип" className="logo" />
      
      {/* Заголовки */}
      <h2 className="profile-title">Профиль</h2>
      <p className="profile-username">@Имяпользователя</p>
      <p className="page-section-title">Ваша страница</p>

      {/* Карточка страницы (только этот блок с рамкой) */}
      <div className="page-card">
        <p className="page-name">@Имястраницы</p>
        <hr />
        <button className="edit-button">Редактировать страницу</button>
        <p className="page-link">@http://ccылкастраницы</p>
      </div>
    </div>
  );
};