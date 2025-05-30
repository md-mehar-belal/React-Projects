// App.jsx
import styles from "./App.module.css";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className={styles.appContainer}>
      <CurrencyConverter />
    </div>
  );
}

export default App;
