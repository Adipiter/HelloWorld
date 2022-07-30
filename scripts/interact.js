require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

// interact.js

const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS }  = process.env;
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="mumbai", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


// ...

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
  }
  main();