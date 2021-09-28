// require('hardhat-deploy');
// require("@nomiclabs/hardhat-ethers");
// require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-ethers')
// require('hardhat-contract-sizer');

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {
            deploy: ['deploy'],
        },
    },
};
