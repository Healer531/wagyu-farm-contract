const WagToken = artifacts.require("WagToken");
const SyrupBar = artifacts.require("SyrupBar");
const MasterChef = artifacts.require("MasterChef");
const Timelock = artifacts.require("Timelock");
const SousChef = artifacts.require("SousChef");

const wagAddress = "0x0513a9ccE74A164Db50E9c4df7368bD77722000E";
const syrupAddress = "0xCc9e4b3E0F32D0dc4c52849617C02024030d4792";
const devAddress = "0xa3A6064A20700e4ed956569190345094Bf4af370";
const wagPerBlock = "40000000000000000000";
const startBlock = 10321162;

const rewardPerBlock = "2000000000000000000";
const sousStartBlock = 10320548;
const sousEndBlock = 11320348;

module.exports = function(deployer) {
  // deployer.deploy(WagToken).then(() => {
  //   deployer.deploy(SyrupBar, WagToken.address).then(() => {
  //     deployer.deploy(MasterChef, WagToken.address, SyrupBar.address, devAddress, wagPerBlock, startBlock);
  //   });
  // });

  deployer.deploy(SousChef, syrupAddress, rewardPerBlock, sousStartBlock, sousEndBlock);

  // deployer.deploy(Timelock);


};
