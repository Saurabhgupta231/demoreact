import styles from "./App.module.css";
import CurrentRate from "./CurrentRate";
import Footer from "./Footer";

function Accelerated() {
  return (
    <div>
      <div className={styles.cart}>
        <h2>Enabled Accelerated APY</h2>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider}`}></span>
        </label>
      </div>

      <div className={styles.cart}>
        <button className={styles.button}>Tier 1</button>
        <button className={styles.button}>Tier 2</button>
        <button className={styles.button}>Tier 3</button>
        <button className={styles.button}>Tier 4</button>
        <button className={styles.button}>Tier 5</button>
      </div>
      <CurrentRate />
      <Footer />
    </div>
  );
}

export default Accelerated;
