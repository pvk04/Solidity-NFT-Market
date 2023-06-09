import { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import LoginPage from "./pages/LoginPage/LoginPage";
import abi from "./configs/abi";
import { AppContext } from "./contexts/context";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [{ login, address }, dispatch] = useContext(AppContext);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.ethereum?.on("accountsChanged", handleAccountChange);

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

        // получить приватный ключ аккаунта для импорта в метамаск
        // const test = await web3.eth.accounts.decrypt({"address":"0780d0d19712218c16baaaf679daf2cffd07a670","crypto":{"cipher":"aes-128-ctr","ciphertext":"de49848df496b94d472a56ce3c73bf9b354b9c4953656c040536b59dc762ed85","cipherparams":{"iv":"7ff21c1cbedde2c33f3711293120d845"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"73d20e6db91b310b76a209c673c58fbc1090ac011c3e50544be4c21ee6065a68"},"mac":"d3aa2df69dd7d7fb093bd92e249dfc2358eb82ca8c48593f506a043035fc6791"},"id":"a2ac4e26-c6c2-4f46-bde5-c1dc4156f920","version":3}, "1")
        // console.log(test);
      }
    }
    initPorovider();

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountChange);
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
          path="/*"
          element={login ? <MainPage /> : <Navigate to="/login" />}
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
