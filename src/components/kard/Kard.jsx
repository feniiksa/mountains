import styles from "./Kard.module.css";

export const Kard = () => {
  return (
    <div className={styles.wap}>
      <div className={styles.container}>
        <div className={styles.left}>
          <b className={styles.number}>01</b>
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
              read more
              <img src="./img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src="./img/kardOne.png" alt="foto" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.right}>
          <img src="./img/kardTho.png" alt="foto" />
        </div>
        <div className={styles.left}>
          <b className={styles.number}>02</b>
          <div className={styles.text}>
            <small className={styles.small}>Hiking Essentials</small>
            <h2 className={styles.title}>Picking the right Hiking Gear!</h2>
            <p className={styles.paragraph}>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <button className={styles.button}>
              read more
              <img src="./img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <b className={styles.number}>03</b>
          <div className={styles.text}>
            <small className={styles.small}>where you go is the key</small>
            <h2 className={styles.title}>Understand Your Map & Timing</h2>
            <p className={styles.paragraph}>
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <button className={styles.button}>
              read more
              <img src="./img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src="./img/kardThree.png" alt="foto" />
        </div>
      </div>
    </div>
  );
};
