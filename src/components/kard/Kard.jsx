import styles from "./Kard.module.css";

export const Kard = (props) => {
  const { button, number } = props;

  return (
    <div className={styles.wap}>
      <div className={styles.container}>
        <div className={styles.left}>
          <b className={styles.number}>{number}</b>
          <div className={styles.text}>
            <small className={styles.small}>GEt Started</small>
            <h2 className={styles.title}>What level of hiker are you?</h2>
            <p className={styles.paragraph}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <button className={styles.button}>
              {button}
              <img src="./img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src="./img/kardOne.png" alt="foto" />
        </div>
      </div>
    </div>
  );
};
