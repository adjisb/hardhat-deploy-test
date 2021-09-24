module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('OtherGreeter', {
        from: deployer
    });
};
module.exports.tags = ['OtherGreeter'];
