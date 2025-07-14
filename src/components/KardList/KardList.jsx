import { Kard } from "../kard/Kard";
import styles from "./KardList.module.css";

export const KardList = function ({ kards }) {
  return (
    <div className={styles.kardList}>
      {kards.map((kard) => (
        <Kard number={kard.number} button={kard.button} key={kard.id}/>
      ))}
    </div>
  );
};
