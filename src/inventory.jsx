import styles from "./Inventory.module.css";
const Inventory = () => {
  return (
    <div className={styles.inventory}>
      <div className={styles.inventoryChild} />
      <div className={styles.button}>
        <img className={styles.filter4Icon} alt="" src="/filter-4@2x.png" />
      </div>
      <input className={styles.search} type="search" />
      <button className={styles.button1}>
        <img className={styles.writing1Icon} alt="" src="/writing-1@2x.png" />
      </button>
      <button className={styles.button2}>
        <img className={styles.bin1Icon} alt="" src="/bin-1@2x.png" />
      </button>
      <button className={styles.button3}>
        <img
          className={styles.icons8Update301}
          alt=""
          src="/icons8update30-1@2x.png"
        />
      </button>
      <button className={styles.button4}>
        <img className={styles.barcode1Icon} alt="" src="/barcode-1@2x.png" />
      </button>
      <button className={styles.filter}>
        <img className={styles.filter4Icon} alt="" src="/filter-1@2x.png" />
      </button>
      <div className={styles.buttonParent}>
        <button className={styles.button5}>
          <div className={styles.homeIcon}>
            <img className={styles.filter4Icon} alt="" src="/filter-2@2x.png" />
          </div>
          <div className={styles.dashboard}>Dashboard</div>
        </button>
        <button className={styles.button6}>
          <div className={styles.inventoryIcoon}>
            <img className={styles.filter4Icon} alt="" src="/filter-3@2x.png" />
          </div>
          <div className={styles.inventory1}>Inventory</div>
        </button>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.kansaraInc}>Kansara Inc.</div>
      </div>
    </div>
  );
};

export default Inventory;
