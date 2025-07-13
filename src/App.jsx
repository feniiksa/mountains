import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { MainImg } from "./components/mainImg/MainImg";
import { Kard } from "./components/kard/Kard";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className="styles contaiter">
        <Header />
        <MainImg />
        <Kard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
