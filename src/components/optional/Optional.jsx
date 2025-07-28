import styles from "./Optional.module.css";

export const Optional = function ({ kards = [] }) {
  console.log(kards);
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className={styles.Optional}>
      <div className={styles.sotial}>
        <ul className={styles.ul}>
          <li className={styles.li}>Follow us</li>
          <li className={styles.li}>
            <img src="/img/instagram.svg" alt="" />
          </li>
          <li className={styles.li}>
            <img src="/img/twitter.svg" alt="" />
          </li>
        </ul>
      </div>
      <div className={styles.scroll}>
        <ul className={styles.ul}>
          <li className={styles.li}>Start</li>
          {kards.map((_, index) => (
            <li key={index} className={styles.li}>{formatNumber(index + 1)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
