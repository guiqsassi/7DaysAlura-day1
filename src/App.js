import './App.css';
import Assinatura from './Components/Assinatura/Assinatura';
import Menu from './Components/Menu/Menu';
import ShopSection from './Components/ShopSection/ShopSection';
import Offers from './Components/offers/Offers';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className='faixas'></div>
      <Menu></Menu>
      <Assinatura></Assinatura>
      <Offers></Offers>
      <ShopSection></ShopSection>
    </div>
  );
}

export default App;
