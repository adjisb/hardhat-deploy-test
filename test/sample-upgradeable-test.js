/* global describe, deployments */
const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("GreeterUpgradeable", function () {
    it("Should return the new greeting once it's changed", async function () {
        await deployments.fixture(['GreeterUpgradeable']);
        const defaultProxyAdmin = await ethers.getContract('DefaultProxyAdmin');
        console.log("GreeterUpgradeable ProxyAdmin:", defaultProxyAdmin.address);
    });
});
