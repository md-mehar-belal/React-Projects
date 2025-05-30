import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C", "(", ")", "%",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "^", "+",
    "√", "="
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(
            buttonName === "√" ? "sqrt(" : buttonName
          )}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
