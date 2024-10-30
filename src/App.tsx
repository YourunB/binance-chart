import viteLogo from '/binance-logo.svg';
import { useEffect } from 'react';
import { getBinanceDataApi } from './api/getBinanceDataApi';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [binanceData, setBinanceData] = useState<any | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBinanceDataApi();
        setBinanceData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(binanceData)

  return (
    <>
      <img src={viteLogo} className="logo" alt="Binance" />
    </>
  )
}

export default App
