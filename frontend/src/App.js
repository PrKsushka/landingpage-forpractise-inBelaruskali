import Main from './main';
import './main.css';
import FirstWindow from "./Windows/FirstWindow/FirstWindow";
import SecondWindow from "./Windows/SecondWindow/SecondWindow";
import ThirdWindow from "./Windows/ThirdWindow/ThirdWindow";
import FourthWindow from "./Windows/FourthWindow/FourthWindow";
import FifthWindow from "./Windows/FifthWindow/FifthWindow";
import Poloska from "./Components/Poloska/poloska";
import SixWindow from "./Windows/SixWindow/SixWindow";
import SeventhWindow from "./Windows/SeventhWindow/SeventhWindow";
import EightWindow from "./Windows/EightWindow/EightWindow";
import Footer from "./Components/footer/footer";
function App() {
  return (
      <div>
          <FirstWindow/>
          <SecondWindow src={"./images/salt.png"}/>
          <ThirdWindow src={"./images/salt.png"}/>
          <FourthWindow/>
          <Poloska src={"./images/Poloska.png"}/>
          <FifthWindow src={"./images/salt.png"}/>
          <SixWindow/>
          <SeventhWindow/>
          <EightWindow/>
          <Footer/>
      </div>
  );
}

export default App;
