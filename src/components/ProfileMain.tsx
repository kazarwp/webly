import profileImg from "../assets/profile_logo.svg";

export const ProfileMain = () => {
  return (
    <div className="card__img-container">
        <img className="card__img" src={profileImg} alt="Лого карточки" />
    </div>
  );
};
