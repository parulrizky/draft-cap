import './App.css';
import Navigasi from './Component/Navigasi';
import Slide from './Component/Slide';
import Tranding from "./Component/Tranding";
import "./style/landingPage.css"
import SuperHero from './Component/Footer';

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigasi/>
        <Slide/>
      </div>
      <div className="tranding">
        <Tranding/>
      </div>
      <div className="superhero">
        <SuperHero/>
      </div>
    </div>
  );
}

export default App;