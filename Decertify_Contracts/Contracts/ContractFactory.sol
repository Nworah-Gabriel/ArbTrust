// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "./NFT_CertificateContract.sol";
import "./UsersContract.sol";

//This factory aims to create a new instance of CertificateNFT
contract NFT_Factory is Users{

    CertificateNFT[] certificateNFT;
    mapping(address => (mapping(address => string)) public UploadedCertificates;

    //A function for creating new CertifiateNFT with new name and symbol 
    function createNewCertificateNFTClone(
        string memory contractname,
        string memory symbol,
        address _address,
        string[12] memory _secretPhrase
    ) private returns(bool success, CertificateNFT certificateNFTClone){
        bool userExists;
        bool userIsAnNFT_Issuer;
        (userExists) = AuthenticateUser(_address, _secretPhrase);

        if(userExists == true){
            (userIsAnNFT_Issuer) = AuthorizeUser(_address);

            if(userIsAnNFT_Issuer == true){
                certificateNFTClone = new CertificateNFT(
                contractname,
                symbol,
                _address
                    );
                certificateNFT.push(certificateNFTClone);
                return (success = true, certificateNFTClone);
            }
        } 
    }

    //A function for getting the list of deployed CertificateNFT
    function getNFTCertificate_Count() external view returns (uint256) {
        return certificateNFT.length;
    }

    
    //A function for getting a deployed NFT from the certificateNFT array
    // function getSpecificNFTCertificate(address contractDeployer) external view returns (CertificateNFT) {
    //     CertificateNFT NFTContract;
    //     for(uint count = 0; count <= certificateNFT.length; count += 1){
    //         if(certificateNFT[count].contractDeployer == contractDeployer){
    //             NFTContract = certificateNFT[count];
    //             break;
    //             return NFTContract;
    //         }
    //     }
    //     return NFTContract;
    // }
}
