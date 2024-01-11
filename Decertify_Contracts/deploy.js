// import { ethers } from 'hardhat';

// export async function createContract(
//     _first_name,
//     _last_name,
//     _username,
//     _wallet_address,
//     userType,
//     _secretPhrase,
//     _email_address
// ) {
//     const UserContract = await ethers.getContractFactory("Users");
//     const userContact = await UserContract.deploy();
//     await userContact.deployed();
//     await userContact.createUser(
//         _first_name,
//         _last_name,
//         _username,
//         _wallet_address,
//         userType,
//         _secretPhrase,
//         _email_address
//     );
//     return await userContact.getUser(_wallet_address);
// }


// createContract(
//     "Amara",
//     "Philip",
//     "Besty",
//     "0x5FbDB2315678afecb367f032d93F642f64180aa3",
//     0,
//     ["secretsecret", "secretsecret", "secretsecret", "secclearetsecret", "secretsecret", "secretsecret",  "secretsecret", "secretsecret", "secret","secretsecret", "secretsecret", "secretsecret"],
//     "borisadedayopaul@gmail.com"
// )



async function main(){
    const MyContract = await hre.ethers.getContractFactory("NFT_Factory");
    const UserContract = await hre.ethers.getContractFactory("Users");
    const userContact = await UserContract.deploy();
    const DeployContact = await MyContract.deploy("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", userContact.address);
    await userContact.deployed();
    await DeployContact.deployed();
    // await DeployContact.updateContractDeployer("0x532354D85920702C461C59B33b14911D8D1b97F5");
    console.log("Contract has been deployed to: ", DeployContact.address);
    console.log(userContact.address);
    console.log("Getting the NFT factory hash:", DeployContact.deployTransaction.hash);
    console.log("Getting users contract hash:", userContact.deployTransaction.hash);
}

main()
    .then( () => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
