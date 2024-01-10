// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "./NFT_CertificateContract.sol";
import "./UsersContract.sol";


//This factory aims to create a new instance of CertificateNFT
contract NFT_Factory{

    constructor(
    address _deployerAddress,
    address _UserContractAddress
    ){
        console.log("Contract deployer:", msg.sender);
        contractDeployer = payable(_deployerAddress);
        UserContractAddress = payable(_UserContractAddress);
    }
    address payable public contractDeployer;
    address public UserContractAddress;
    mapping(address => mapping(address => string)) public UploadedCertificates;
    Users userContract = Users(payable(UserContractAddress));
    CertificateNFT[] certificateNFT;

    //A function for creating new CertifiateNFT with new name and symbol 
    function createNewCertificateNFTClone(
        string memory contractname,
        string memory symbol,
        address _address,
        string[12] memory _secretPhrase
    ) public payable returns(bool success, CertificateNFT certificateNFTClone){
        bool userExists;
        bool userIsAnNFT_Issuer;
        uint count;
        (userExists) = userContract.AuthenticateUser(_address, _secretPhrase);

        if(userExists == true){
            (userIsAnNFT_Issuer) = userContract.AuthorizeUser(_address);

            if(userIsAnNFT_Issuer == true){
                for (count = 0; count <= certificateNFT.length; count += 1){
                    require(keccak256(abi.encodePacked(certificateNFT[count].symbol)) == keccak256(abi.encodePacked(symbol)), "Symbol already in use by another issuer");
                }
                certificateNFTClone = new CertificateNFT(
                        contractname,
                        symbol,
                        _address,
                        UserContractAddress               
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

    
    // A function for getting a deployed NFT from the certificateNFT array
    function getSpecificNFTCertificate(address _contractDeployer, string calldata symbol) external view returns (CertificateNFT) {
        CertificateNFT NFTContract;
        for(uint count = 0; count <= certificateNFT.length; count += 1){

            NFTContract = CertificateNFT(certificateNFT[count]);
            address mainDeployer = NFTContract.viewContractDeployer();
            
            if(mainDeployer == payable(_contractDeployer) && keccak256(abi.encodePacked(NFTContract.symbol)) == keccak256(abi.encodePacked(symbol))){
                NFTContract = certificateNFT[count];
                return NFTContract;
            }
        }
        return NFTContract;
    }
}