/* global describe, it, deployments */
const {network, ethers} = require('hardhat');


it('some test', async function () {
    await network.provider.request({
        method: 'hardhat_reset',
        params: [],
    });
    const [deployer] = await ethers.getSigners();
    const contractFactory = await ethers.getContractFactory("Greeter");
    const contract = await contractFactory.deploy();
    await contract.setGreeting("BLA");
    await contract.init(10);
    console.log(await contract.greet());

});
