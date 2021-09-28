require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require('hardhat-gas-reporter');
require('solidity-coverage');
require('hardhat-contract-sizer');

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {
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
