import viteLogo from '/binance-logo.svg';
import { useEffect } from 'react';
import { getBinanceDataApi } from './api/getBinanceDataApi';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [data, setData] = useState<any | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBinanceDataApi();
        const dataParse = data.map((v: any) => ({
          time: new Date(v[0]).toLocaleString(),
          open: parseFloat(v[1]),
          high: parseFloat(v[2]),
          low: parseFloat(v[3]),
          close: parseFloat(v[4]),
        }));
        setData(dataParse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    <>
      <img src={viteLogo} className="logo" alt="Binance" />
    </>
  )
}

export default App
