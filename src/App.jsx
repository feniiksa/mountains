import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { MainImg } from "./components/mainImg/MainImg";
import { Footer } from "./components/footer/Footer";
import { KardList } from "./components/KardList/KardList";

const kards = [
  { number: "01", button: "read more", id: "1" },
  { number: "02", button: "read more", id: "2" },
  { number: "03", button: "read more", id: "3" },
];

function App() {
  return (
    <div className={styles.app}>
      <div className="styles contaiter">
        <Header artCount={kards.length}/>
        <MainImg />
        <KardList kards={kards} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
