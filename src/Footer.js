import styles from "./App.module.css";

function Footer() {
  return (
    <div>
      <div>
        <h2 className={styles.right}>Hide Details</h2>
        <ul>
          <p>Calculated based on current Rates</p>
          <p>
            All figures are estimates provided for your convenience only, and by
            no means represent guranteed returns
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
