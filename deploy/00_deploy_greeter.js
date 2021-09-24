module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('Greeter', {
        from: deployer
    });
};
module.exports.tags = ['Greeter'];
