import "./App.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./contractJSON/chai.json"
import Buy from "./components/Buy";
import Memo from "./components/Memo";
import './App.css'
import chai from "./chai.png";

const App = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState("Not connected")

  useEffect(() => {
    const template = async () => {

      const contractAddres = "0x3a12680cbE44653Bc2A5BF25528Beb045e6B8D1D";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain

      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })

        // for refereshing if the account will change
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })

        setAccount(account)
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer = await provider.getSigner(); //write the blockchain

        // creating contract instance
        const contract = new ethers.Contract(contractAddres, contractABI, signer)
        console.log(contract)
        setState({ provider, signer, contract })

        console.log(contract)
      }
      catch (error) {
        alert(error);
      }

    }
    template();

  }, [])

  return (
    <>
      <div >
        <img src={chai} className="img-fluid" alt=".." width="100%" />
        <p style={{ marginTop: "10px", marginLeft: "5px" }}>
          <small>Connected Account - {account}</small>
        </p>

        <Buy state={state} />
        <Memo state={state} />

      </div>
    </>
  );
};

export default App;