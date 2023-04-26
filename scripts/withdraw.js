const { getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("----FUNDING----");
  const txResponse = await fundMe.withdraw();
  await txResponse.wait(1);
  console.log("GOT IT BACK!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
