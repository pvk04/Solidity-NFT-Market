import { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import LoginPage from "./pages/LoginPage/LoginPage";
import abi from "./configs/abi";
import { AppContext } from "./contexts/context";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const [{ login, address }, dispatch] = useContext(AppContext);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountChange);

    async function initPorovider() {
      const web3 = new Web3("http://localhost:8545");
      const contract = new web3.eth.Contract(
        abi,
        "0x09901E4C55B3dB1d17DF4146eE9f18834f14641F"
      );
      dispatch({ type: "SET_CONNECTION", payload: { web3, contract } });

      if (window.ethereum) {
        setIsConnected(true);
      }

      const accounts = await web3.eth.getAccounts();
      for (const account of accounts) {
        await web3.eth.personal.unlockAccount(account, "1", 0);
      }
    }
    initPorovider();

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountChange);
    };
  }, []);

  const handleAccountChange = (...args) => {
    const accounts = args[0];

    if (accounts[0] !== address) {
      dispatch({ type: "SET_ADDRESS", payload: accounts[0] });
      navigate("/login");
    }
  };

  return (
    <div className="App" style={{ background: "grey", display: "flex" }}>
      <Routes>
        <Route
          path="/"
          element={login ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            isConnected ? <LoginPage /> : <h1>METAMASK IS NOT CONNECTED</h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
