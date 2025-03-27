import logo from "../assets/header_logo.svg"; 

export const RegMain = () => {
    return (
        <div className="login-container">
            <div className="reg-box">
                <img src={logo} alt="Webly Logo" className="logo" />
                <h2 className="login-h2">Создайте учетную запись</h2>
                <input type="text" placeholder="Имя" className="input-field" />
                <input type="email" placeholder="Электронная почта" className="input-field" />
                <input type="password" placeholder="Пароль" className="input-field" />
                <button className="login-button">Создать</button>
                <p className="register-link">
                Уже есть аккаунт? <a href="/register">Войти тут</a>
                </p>
            </div>
        </div>
    );
  };