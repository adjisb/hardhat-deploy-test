/* global describe, it, deployments */
const {expect} = require("chai");
const {deployments, ethers, getUnnamedAccounts} = require('hardhat');
const {BigNumber} = require("ethers");

it('some test', async function () {
    await deployments.fixture(['GreeterUpgradeable']);
    const [greetOwner] = await getUnnamedAccounts();
    const contract = await ethers.getContract('GreeterUpgradeable');
    expect(BigNumber.from(await contract.y()).toNumber()).to.be.equal(123);
});
