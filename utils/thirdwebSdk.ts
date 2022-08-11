import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";
import { contractAddress } from "../constants/azuki/contract";

const provider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_RPC_NODE
);
const wallet = new ethers.Wallet(
  process.env.NEXT_PUBLIC_PRIVATE_KEY ?? "",
  provider
);

const sdk = new ThirdwebSDK(wallet);
// console.log(process.env.NEXT_PUBLIC_PRIVATE_KEY);
export const totalSupply = sdk.getNFTDrop(contractAddress).getAllUnclaimed();
