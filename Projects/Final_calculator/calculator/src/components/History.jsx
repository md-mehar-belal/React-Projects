import styles from "./History.module.css";

const History = ({ history }) => {
  return (
    <div className={styles.history}>
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
