/* global describe, deployments */
const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
        await deployments.fixture(['Greeter']);
        // const greeter = await deployments.get('Greeter');
        const greeter = await ethers.getContract('Greeter');
        expect(await greeter.greet()).to.equal("Hello, world!");

        const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

        // wait until the transaction is mined
        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
});
