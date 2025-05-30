import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import History from "./components/History";
import styles from "./App.module.css";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [calVal, setCalVal] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = evaluate(calVal);
        setHistory((prevHistory) => [...prevHistory, `${calVal} = ${result}`]);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.calculator} ${darkMode ? styles.dark : ""}`}>
      {/* 🔥 NEW header section */}
      <div className={styles.header}>
        <span>Scientific</span>
        <button className={styles.themeButton} onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <span>Calculator</span>
      </div>

      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
      <History history={history} />
    </div>
  );
}

export default App;
