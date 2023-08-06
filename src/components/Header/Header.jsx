import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="/cinammon__5_-removebg-preview.png"
        alt=""
      />
      <button className={styles.instBut}>
        <a
          className={styles.inst}
          href="https://instagram.com/ninnusick?igshid=OGQ5ZDc2ODk2ZA=="
        >
          Our Instagram
        </a>
      </button>
      <button className={styles.instBut}>
        <a className={styles.inst} href="#">
          Your Reviews
        </a>
      </button>
    </div>
  );
}

export default Header;
