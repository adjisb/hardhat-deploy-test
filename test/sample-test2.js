/* global describe, it, deployments */
const {network, ethers} = require('hardhat');


it('some test2', async function () {
    const [deployer] = await ethers.getSigners();
    const contractFactory = await ethers.getContractFactory("Greeter2");
    const contract = await contractFactory.deploy();
    await contract.setGreeting("BLA");
    await contract.init(10);
    console.log(await contract.greet());

});
