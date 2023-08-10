import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.copyright}>
        <img className={styles.logowoBg} src="/cinnamon2.png" alt="" />
        <p className={styles.copyrightFooter}>
          Copyright © 2023 Cook Platforms, Inc.
        </p>
      </div>

      <ul className={styles.footerUl}>
        <li className={styles.footerLi}>Phone number: +380661110000</li>
        <li className={styles.footerLi}>
          Mail: cinnamonsrch.support@gmail.com
        </li>
        <li className={styles.footerLi}>Instagram: cinnamon.recipes</li>
        <li className={styles.footerLi}>
          Address: Kropyvnytskyi, Gogolia Street, 86
        </li>
      </ul>
      <img
        className={styles.networks}
        src="/color_rgb_10__149__0__-removebg-preview.png"
        alt=""
      />
    </footer>
  );
}

export default Footer;
