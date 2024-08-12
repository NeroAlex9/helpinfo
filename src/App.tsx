import style from "./App.module.scss";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
}

export default App;
