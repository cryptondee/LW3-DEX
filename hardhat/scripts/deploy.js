const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  const ExchangeContract = await ethers.getContractFactory("Exchange");
  const exchangeContract = await ExchangeContract.deploy(cryptoDevTokenAddress);
  await exchangeContract.deployed();
  console.log(`Exchange contract Address: ${exchangeContract.address}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
