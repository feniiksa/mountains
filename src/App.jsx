import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { Optional } from "./components/optional/optional";
import { MainImg } from "./components/mainImg/MainImg";
import { Footer } from "./components/footer/Footer";
import { KardList } from "./components/KardList/KardList";

const kards = [
  { number: "01", button: "read more", id: "1" },
  { number: "02", button: "read more", id: "2" },
  { number: "03", button: "read more", id: "3" },
  { number: "04", button: "read more", id: "4" },
];

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.contaiter}>
        <Header artCount={kards.length} />
        <Optional kards={kards}/>
        <MainImg />
        <KardList kards={kards} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
