require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require('solidity-coverage');

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {
            tags: ['BLA', 'BLA1', 'BLA2'],
            deploy: ['deploy'],
        },
    },
    namedAccounts: {
        deployer: {
            default: 1,
        }
    }
};
