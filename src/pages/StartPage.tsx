import { StartHeader } from '../components/StartHeader.tsx';
import { MainContent } from '../components/StartMain.tsx';
import background from '../assets/start-background.svg';

export const StartPage = () => {
  return (
    <div className="start__App">
      <div className="start__content-container">
        <div className="start__image-section">
          <img src={background} alt="Background" className="start__full-height-image" />
        </div>
        <div className="start__content-section">
          <StartHeader />
          <MainContent />
        </div>
      </div>
    </div>
  );
};