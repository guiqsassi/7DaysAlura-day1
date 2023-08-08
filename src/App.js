import './App.css';
import Assinatura from './Components/Assinatura/Assinatura';
import Menu from './Components/Menu/Menu';
import Offers from './Components/offers/Offers';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Menu></Menu>
      <Assinatura></Assinatura>
      <Offers></Offers>
    </div>
  );
}

export default App;
