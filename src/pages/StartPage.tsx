import { StartHeader } from '../components/StartHeader.tsx';
import { MainContent } from '../components/StartMain.tsx';
import '../styles/start-page/start.css';
import background from '../assets/start-background.svg';

export const StartPage = () => {
  return (
    <div className="App">
      <div className="content-container">
        <div className="image-section">
          <img src={background} alt="Background" className="full-height-image" />
        </div>
        <div className="content-section">
          <StartHeader />
          <MainContent />
        </div>
      </div>
    </div>
  );
};