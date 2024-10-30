import viteLogo from '/binance-logo.svg';
import { useEffect } from 'react';
import { getBinanceDataApi } from './api/getBinanceDataApi';

import './App.css';

const App = () => {
  useEffect(() => {
    getBinanceDataApi();
  }, []);

  return (
    <>
      <img src={viteLogo} className="logo" alt="Binance" />
    </>
  )
}

export default App
