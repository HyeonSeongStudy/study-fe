import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Conins</h1>
      {loading ? "Loading..." : null}
      <ul>
        {coins.map((coin) => (
          <li>{coin.name} ({coin.symbol}) : ({coin.quotes.USD.price})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
