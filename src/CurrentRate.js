import styles from "./App.module.css";

function CurrentRate() {
  let value = 0.0;
  return (
    <div>
      <div>
        <h2 className={styles.right}>ROI at Current Rates</h2>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder={`${parseFloat(value).toFixed(3)}USD`}
          />
        </label>
      </div>
    </div>
  );
}

export default CurrentRate;
