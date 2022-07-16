import './App.css';
import { useState } from "react";

function App() {

  const [account, setAccount] = useState(null)

  const initConnection = async() => {
    // check if metamask is on the browser
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccount(accounts[0])
    } else {
      console.alert('Pls install metamase')
    }
  }

  const disconnect = async() => {
    setAccount(null)
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={initConnection}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <p>{account}</p>
    </div>
  );
}

export default App;
