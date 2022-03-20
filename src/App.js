import "./App.css";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwo from "./components/IncreaseByTwo";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          margin: "20px",
        }}
      >
        <Counter />
      </div>
      <div className="row">
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwo />
      </div>
    </div>
  );
}

export default App;
