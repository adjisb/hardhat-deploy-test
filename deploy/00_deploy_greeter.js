module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer, upgradeAdmin} = await getNamedAccounts();
    await deploy('GreeterUpgradeable', {
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
};
module.exports.tags = ['GreeterUpgradeable'];
