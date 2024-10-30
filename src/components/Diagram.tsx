import { useEffect } from 'react';
import { getBinanceDataApi } from '../api/getBinanceDataApi';
import { useState } from 'react';

import { VictoryChart, VictoryCandlestick, VictoryAxis, VictoryTheme } from 'victory';

const Diagram = () => {
  const [data, setData] = useState<any | null>(null);

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
  
  useEffect(() => {
    fetchData();
  }, []);

  setInterval(() => {
    if (new Date().getMinutes() === 0) fetchData();
  }, 60000);

  return (
    <>
      {(data && data.length > 0) && (
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 4 }}
          scale={{ x: "time" }}
          width={1000}
          height={400}
        >
          <VictoryAxis 
            tickFormat={(t) => `${new Date(t).getHours()} ч.`}
            style={{
              tickLabels: { fontSize: 10 }
            }}
          />
          <VictoryAxis 
            dependentAxis
            style={{
              tickLabels: { fontSize: 10 }
            }}
          />
          <VictoryCandlestick
            data={data}
            candleColors={{ positive: "green", negative: "red" }}
          />
      </VictoryChart>
      )}
    </>
  )
}

export default Diagram
