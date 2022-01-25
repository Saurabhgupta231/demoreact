import Accelerated from "./Accelerated";
import styles from "./App.module.css";
import Timeframe from "./Timeframe";
function App() {
  let value = 0.0;
  return (
    <div className={styles.body}>
      <h2>ROI Calculator</h2>
      <label>
        <input
          className={styles.input}
          type="text"
          placeholder={`${parseFloat(value).toFixed(3)}USD`}
        />
      </label>
      <div className={`${styles.cart} `}>
        <button className={styles.button}>$1000</button>
        <button className={styles.button}>$100</button>
        <p>-CAKE0.000</p>
      </div>
      <Timeframe />
      <Accelerated />
    </div>
  );
}

export default App;
