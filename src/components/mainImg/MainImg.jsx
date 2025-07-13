import styles from "./MainImg.module.css";

export const MainImg = () => {
  return (
    <img
      className={styles.img}
      src="./img/mainImg.png"
      alt="фоновая картинка"
    />
  );
};
