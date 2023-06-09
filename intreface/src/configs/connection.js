import Web3 from "web3";
import abi from "./abi";

export const web3 = new Web3("http://localhost:8545");
export const contract = new web3.eth.Contract(
  abi,
  "0xCA47369d1F8EcAb509DF1DFf61947C04A2c1D42d"
);
