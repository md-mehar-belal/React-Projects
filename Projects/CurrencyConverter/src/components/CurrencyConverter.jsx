// components/CurrencyConverter.jsx
import { useEffect, useState } from "react";
import styles from "./CurrencyConverter.module.css";
import countryCurrencyList from "../data/countryCurrencyList";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fromCountry = countryCurrencyList.find(c => c.code === fromCurrency)?.countryCode || "US";
  const toCountry = countryCurrencyList.find(c => c.code === toCurrency)?.countryCode || "IN";

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchExchangeRate = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await res.json();
      if (data.result === "success") {
        const rate = data.rates[toCurrency];
        setExchangeRate(rate);
      } else {
        setError("Failed to fetch rate.");
      }
    } catch (err) {
      setError("Failed to fetch rate.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExchangeRate();
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className={styles.container}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.amount}>
          <p>Enter Amount</p>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className={styles.dropdown}>
          <div className={styles.from}>
            <p>From</p>
            <div className={styles.selectContainer}>
              <img src={`https://flagsapi.com/${fromCountry}/flat/64.png`} alt="From Flag" />
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {countryCurrencyList.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="button" className={styles.swapButton} onClick={handleSwap}>⇄</button>

          <div className={styles.to}>
            <p>To</p>
            <div className={styles.selectContainer}>
              <img src={`https://flagsapi.com/${toCountry}/flat/64.png`} alt="To Flag" />
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {countryCurrencyList.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.msg}>
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span className={styles.error}>{error}</span>
          ) : (
            exchangeRate && (
              <span>
                {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)} {toCurrency}
              </span>
            )
          )}
        </div>

        <button type="submit">Get Exchange Rate</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
