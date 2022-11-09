import "./styles.css";
import Snk from "./components/snk";
import Kaolu from "./components/kaolu";
import Oreo from "./components/Oreo";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React Workshop</h1>
      <div>
        <Snk text={"snk"} />
        <Kaolu text={"kaolu"} />
        <Oreo text={"oreo"} count={count} setCount={setCount} />
      </div>
    </div>
  );
}
