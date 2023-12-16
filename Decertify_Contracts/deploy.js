async function main(){
    const MyContract = await hre.ethers.getContractFactory("CertificateNFT");
    const DeployContact = await MyContract.deploy("NFT Certificate", "NFT");
    await DeployContact.deployed();
    await DeployContact.updateContractDeployer("0x532354D85920702C461C59B33b14911D8D1b97F5");
    console.log("Contract has been deployed to: ", DeployContact.address);
}

main()
    .then( () => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });