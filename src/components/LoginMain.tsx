import logo from "../assets/header_logo.svg"; 

export const LoginMain = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Webly Logo" className="logo" />
                <h2 className="login-h2">Войдите в учетную запись</h2>
                <input type="email" placeholder="Электронная почта" className="input-field" />
                <input type="password" placeholder="Пароль" className="input-field" />
                <button className="login-button">Войти</button>
                <p className="register-link">
                Нет аккаунта? <a href="/reg">Зарегистрироваться тут</a>
                </p>
            </div>
        </div>
    );
  };