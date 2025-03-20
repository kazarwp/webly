import '../styles/start-page/start.css';

export const MainContent = () => {
  return (
    <main>
      <h1>Ваш идеальный сайт всего в пару кликов.</h1>
      <p>Конструируйте, вдохновляйтесь, реализуйте с WEBLY!</p>
      <div className="actions">
        <a href="#" className="documentation-link">Документация</a>
        <a href="#" className="create-site-button">Создать сайт</a>
      </div>
    </main>
  );
};