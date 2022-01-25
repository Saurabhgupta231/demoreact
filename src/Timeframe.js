import styles from "./App.module.css";

function Timeframe() {
  return (
    <div>
      <h2>Timeframe</h2>

      <div className={styles.cart}>
        <button className={styles.button}>1 days</button>
        <button className={styles.button}>7 days</button>
        <button className={styles.button}>30 days</button>
        <button className={styles.button}>1 years</button>
        <button className={styles.button}>5 years</button>
      </div>
    </div>
  );
}

export default Timeframe;
