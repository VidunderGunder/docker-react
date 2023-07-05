import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bunData, setBunData] = useState("");
  const [expressData, setExpressData] = useState("");
  const [dotnetData, setDotnetData] = useState("");

  useEffect(() => {
    fetch("http://localhost:6969")
      .then((response) => response.text())
      .then((data) => setBunData(data))
      .catch((error) => console.error("Error:", error));
    fetch("http://localhost:8080")
      .then((response) => response.text())
      .then((data) => setExpressData(data))
      .catch((error) => console.error("Error:", error));
    fetch("http://localhost:5124/hello")
      .then((response) => response.text())
      .then((data) => setDotnetData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{bunData}</p>
      <p>{expressData}</p>
      <p>{dotnetData}</p>
    </>
  );
}

export default App;
