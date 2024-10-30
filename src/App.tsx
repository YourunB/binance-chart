import viteLogo from '/binance-logo.svg';
import { useEffect } from 'react';
import { getBinanceDataApi } from './api/getBinanceDataApi';
import { useState } from 'react';

import { VictoryChart, VictoryCandlestick, VictoryAxis, VictoryTheme } from 'victory';

import './App.css';

const App = () => {
  const [data, setData] = useState<any | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBinanceDataApi();
        const dataParse = data.map((v: any) => ({
          x: new Date(v[0]),
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

      <div>
        <h2>BTC/USDT</h2>
        {(data && data.length > 0) && (
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 4 }}
            scale={{ x: "time" }}
          >

          <VictoryAxis 
            tickFormat={(t) => `${new Date(t).getDate()}/${new Date(t).getFullYear()}`}
            style={{
              tickLabels: { fontSize: 4 }
            }}
          />

          <VictoryAxis 
            dependentAxis
            style={{
              tickLabels: { fontSize: 4 }
            }}
          />

          <VictoryCandlestick
            data={data}
            candleColors={{ positive: "green", negative: "red" }} // Цвета свечей
          />
          
        </VictoryChart>
        )}
      </div>
    </>
  )
}

export default App
