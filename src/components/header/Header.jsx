import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MNTN</h1>
      <menu>
        <ul className={styles.ul}>
          <li>Equipment</li>
          <li>About us</li>
          <li>Blog</li>
        </ul>
      </menu>
      <div className={styles.account}>Account</div>
    </header>
  );
};
