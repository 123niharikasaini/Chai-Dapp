
const hre = require("hardhat");

async function main() {

  const chai = await hre.ethers.deployContract("Chai");

  await chai.waitForDeployment();

  console.log(
    `Deployed ${await chai.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0xeCB76f0f54D1ec7Eb98E4cDC3995c41DA6c0B73A
// 0xDc40fB4B7A1A9DD9932f7B3B17b202684f93389C

// 0x3a12680cbE44653Bc2A5BF25528Beb045e6B8D1D