import Web3 from "web3";
import abi from "./abi";

export const web3 = new Web3("http://localhost:8545");
export const contract = new web3.eth.Contract(
  abi,
  "0x9e709de64Cb7fb076d4192198CBc5AF84852AF7A"
);
