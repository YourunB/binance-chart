const url = 'https://api.binance.com/';

export const getBinanceDataApi = async () => {
  try {
    const response = await fetch(
      `${url}api/v3/klines?symbol=BTCUSDT&interval=1h&limit=1000`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
