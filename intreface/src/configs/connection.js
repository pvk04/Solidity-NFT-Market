import Web3 from "web3";
import abi from "./abi";

export const web3 = new Web3("http://localhost:8545");
export const contract = new web3.eth.Contract(
	abi,
	"0xf49a56C3C6f1Ff06Fb0effAE2A6538036B3A42c9"
);
