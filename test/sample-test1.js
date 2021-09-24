/* global describe, it, deployments */
const {expect} = require("chai");
const {deployments, ethers, getUnnamedAccounts} = require('hardhat');
const {BigNumber} = require("ethers");

it("My testing environment is not clean, this one fails and it has nothing wrong", async function () {
    await deployments.fixture(['OtherGreeter']);
    const [greetOwner] = await getUnnamedAccounts();

    const contract = await ethers.getContract('OtherGreeter');
    await contract.setGreeting("BLA");
});
