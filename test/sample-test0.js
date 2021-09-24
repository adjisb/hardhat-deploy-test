/* global describe, it, deployments */
const {expect} = require("chai");
const {deployments, ethers, getUnnamedAccounts} = require('hardhat');
const {BigNumber} = require("ethers");

it('some test', async function () {
    await deployments.fixture(['Greeter']);
    const [greetOwner, other] = await getUnnamedAccounts();
    const contract = await ethers.getContract('Greeter');


    const signer = await ethers.getSigner(greetOwner);
    const balancePre = await ethers.provider.getBalance(greetOwner);
    const gasPrice = await ethers.provider.getGasPrice();
    const value = balancePre.sub(gasPrice.mul(30000000));
    await signer.sendTransaction({
        from: greetOwner,
        to: other,
        gasPrice,
        value
    });
    // I'm testing this function
    await contract.setGreeting("BLA", {gasPrice});
});
