import { CONTRACT_ADDRESS, ABI } from "./con";
import { ethers } from "ethers";

export const getContract = async function() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const artXContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider).connect(signer);

    return artXContract;
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
