/* global describe, deployments */
const {expect} = require("chai");
const {ethers} = require("hardhat");

const setupTest = deployments.createFixture(async function () {
    try {
        const defaultProxyAdmin = await ethers.getContract('DefaultProxyAdmin');
        console.log("GreeterUpgradeable2 ProxyAdmin:", defaultProxyAdmin.address);
    } catch (err) {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, deployer, upgradeAdmin] = await getUnnamedAccounts();
    await deployments.deploy('GreeterUpgradeable2', {
        from: deployer,
        proxy: {
            owner: upgradeAdmin,
            proxyContract: 'OpenZeppelinTransparentProxy',
            execute: {
                methodName: 'init',
                args: [123],
            },
        },
    });
});
describe("GreeterUpgradeable2", function () {
    before(async function () {
        // The problem is that
        // getOrNull(name: string) => {
        //   ...
        //   return this.db.deployments[name];
        // }
        // We need to erase this.db.deployments so the proxyAdmin is re-deployed
        // This does the trick
        // await deployments.run([], {resetMemory: true});
    });
    it("Should return the new greeting once it's changed", async function () {
        const fixtures = await setupTest();
        console.log("DONE")
    });
});
