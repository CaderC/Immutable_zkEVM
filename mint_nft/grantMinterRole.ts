import { getDefaultProvider, Wallet } from "ethers"; // ethers v5
import { Provider, TransactionResponse } from "@ethersproject/providers"; // ethers v5
import { ERC721Client } from "@imtbl/zkevm-contracts";

const CONTRACT_ADDRESS = "0x3eaBb25496ccEff08589d01cc6F5F795cC9326E8";
const PRIVATE_KEY = "3ae86252d33f88819f75dfcf8ee647493c273acb81452930199aaf4bea01da9c";
const provider = getDefaultProvider("https://rpc.testnet.immutable.com");

const grantMinterRole = async (
 provider: Provider
): Promise<TransactionResponse> => {
 // Bound contract instance
 const contract = new ERC721Client(CONTRACT_ADDRESS);
 // The wallet of the intended signer of the mint request
 const wallet = new Wallet(PRIVATE_KEY, provider);

 // Give the wallet minter role access
 const populatedTransaction = await contract.populateGrantMinterRole(
  wallet.address
 );
 const result = await wallet.sendTransaction(populatedTransaction);
 console.log("Minter Role Granted");
 return result;
};

grantMinterRole(provider);