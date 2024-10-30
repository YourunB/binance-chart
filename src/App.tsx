import viteLogo from '/binance-logo.svg';
import Diagram from './components/Diagram';

import './App.css';

const App = () => { 
  return (
    <>
      <img src={viteLogo} className="logo" alt="Binance" />
      <h2>BTC/USDT</h2>
      <Diagram />
    </>
  )
}

export default App
