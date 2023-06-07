import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    function initPorovider() {
      if (window.ethereum) {
        setIsConnected(true);
      }
    }
    initPorovider();
  }, []);

  return (
    <div className="App" style={{ background: "grey", display: "flex" }}>
      {isConnected ? <LoginPage /> : <h1>METAMASK IS NOT CONNECTED</h1>}
    </div>
  );
}

export default App;
