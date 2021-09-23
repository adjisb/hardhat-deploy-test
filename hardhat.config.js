require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require('solidity-coverage');
require('hardhat-contract-sizer');
require('hardhat-gas-reporter');
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
            default: 2,
        },
        upgradeAdmin: {
            default: 3
        }
    },
};
