/* global describe, it, deployments */
const {expect} = require("chai");
const {deployments, ethers, getUnnamedAccounts} = require('hardhat');
const {BigNumber} = require("ethers");

it("My testing environment is not clean it fails if I run it with .only, how I clean the environment ?", async function () {
    // this must throw
    const contract = await ethers.getContract('GreeterUpgradeable');
});

it("this is even stranger", async function () {
    const [greetOwner] = await getUnnamedAccounts();

    const contract0 = await ethers.getContract('GreeterUpgradeable');
    expect(BigNumber.from(await contract0.y()).toNumber()).to.be.equal(123);

    await deployments.deploy('GreeterUpgradeable', {
        from: greetOwner,
        execute: {
            methodName: 'init',
            args: [345],
        }
    });
    const contract = await ethers.getContract('GreeterUpgradeable');
    expect(BigNumber.from(await contract.y()).toNumber()).to.be.equal(345);
});
