import styles from "./Header.module.css";

export const Header = ({artCount}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MNTN</h1>
      <menu>
        <ul className={styles.ul}>
          <li>Equipment</li>
          <li>About us</li>
          <li>Blog</li>
          <li className={styles.artCount}>articles: <span id="artCount">{artCount}</span> </li>
        </ul>
      </menu>
      <div className={styles.account}>Account</div>
    </header>
  );
};
