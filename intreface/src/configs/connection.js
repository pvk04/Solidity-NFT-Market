import Web3 from "web3";
import abi from "./abi";

export const web3 = new Web3("http://localhost:8545");
export const contract = new web3.eth.Contract(
  abi,
  "0x09DD7739e07A06F0Fca6A45614529dC8124C5CBf"
);
