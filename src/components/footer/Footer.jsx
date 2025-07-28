import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.slogan}>
        <h2 className={styles.logo}>MNTN</h2>
        <p className={styles.text}>
          Get out there & discover your next slope, mountain & destination!
        </p>
        <small className={styles.copyright}>
          Copyright 2025 MNTN, Inc. Terms & Privacy
        </small>
      </div>

      <div className={styles.more}>
        <h3 className={styles.title}>More on The Blog</h3>
        <ul className={styles.about}>
          <li>
            <a className={styles.li} href="#">
              About MNTN
            </a>
          </li>
          <li>
            <a className={styles.li} href="#">
              Contributors & Writers
            </a>
          </li>
          <li>
            <a className={styles.li} href="#">
              Write For Us
            </a>
          </li>
          <li>
            <a className={styles.li} href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className={styles.li} href="#">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.mntn}>
        <h3 className={styles.title}>More on MNTN</h3>
        <ul className={styles.about}>
          <li>
            <a className={styles.li} href="#">
              The Team
            </a>
          </li>
          <li>
            <a className={styles.li} href="#">
              Jobs
            </a>
          </li>
          <li>
            <a className={styles.li} href="#">
              Press
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
