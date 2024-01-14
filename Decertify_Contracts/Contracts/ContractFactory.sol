// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "./NFT_CertificateContract.sol";
import "./UsersContract.sol";


//This factory aims to create a new instance of CertificateNFT
contract NFT_Factory  {

    constructor(
    address _deployerAddress,
    address _UserContractAddress
    ) payable {
        console.log("Contract deployer:", msg.sender);
        contractDeployer = payable(_deployerAddress);
        UserContractAddress = payable(_UserContractAddress);
    }
    address payable public contractDeployer;
    address public UserContractAddress;
    mapping(address => mapping(address => string)) public UploadedCertificates;
    mapping(address => mapping(string => address)) public certificateNFT;
    CertificateNFT[] certificateNFTArray;
    event log(string, uint);
    Users userContract = Users(payable(UserContractAddress));
    
    receive() external payable {
        emit log("Amount recieved", msg.value);
    }
    fallback() external payable {
        emit log("Amount recieved", msg.value);
    }

    //A function for creating new CertifiateNFT with new name and symbol 
    function createNewCertificateNFTClone(
        string memory contractname,
        string memory symbol,
        address _address,
        string[12] memory _secretPhrase
    ) public payable returns(bool success, CertificateNFT certificateNFTClone){
        bool userExists;
        bool userIsAnNFT_Issuer;
        (userExists) = _AuthenticateUser(_address, _secretPhrase);

        if(userExists == true){
            (userIsAnNFT_Issuer) = _AuthorizeUser(_address);

            if(userIsAnNFT_Issuer == true){
                require(certificateNFT[_address][symbol] ==  0x0000000000000000000000000000000000000000, "Symbol already existing");
                certificateNFTClone = new CertificateNFT(
                        contractname,
                        symbol,
                        _address,
                        UserContractAddress               
                            );
                        certificateNFT[_address][symbol] = address(certificateNFTClone);
                        certificateNFTArray.push(certificateNFTClone);
                        
                        return (success = true, certificateNFTClone);
            }
        } 
    }

    //A function for getting the list of deployed CertificateNFT
    function getNFTCertificate_Count() external view returns (uint256) {
        return certificateNFTArray.length;
    }

    
    // A function for getting a deployed NFT from the certificateNFT array
    function getSpecificNFTCertificate(address _contractDeployer, string calldata symbol) external view returns (address) {
        return (certificateNFT[_contractDeployer][symbol]);
    }

    function _AuthenticateUser(address _userAddress, string[12] memory _secretPhrase) public payable 
    returns (bool){
       bool userExists;
       bytes memory payload = abi.encodeWithSignature("AuthenticateUser(address,string[12])", _userAddress, _secretPhrase);
        (bool success , bytes memory data ) = UserContractAddress.call(payload);
       bool returnedData ;
        assembly {
            returnedData := mload(add(data, 32))
        }
        require(success, "Function call failed");
        userExists = returnedData;
        return (userExists);  
    }

        function _AuthorizeUser(address _userAddress) public payable returns (bool){
           bytes memory payload = abi.encodeWithSignature("AuthorizeUser(address)", _userAddress);
           (bool success , bytes memory data ) = UserContractAddress.call(payload);
           bool returnedData ;
           assembly {
            returnedData := mload(add(data, 32))
           }
           require(success, "Function call failed");
           return (returnedData);
        }
        function _deployer(address _contractAddress) public payable returns (bool){
           bytes memory payload = abi.encodeWithSignature("viewContractDeployer()");
           (bool success , bytes memory data ) = _contractAddress.call(payload);
           bool returnedData ;
           assembly {
            returnedData := mload(add(data, 32))
           }
           require(success, "Function call failed");
           return (returnedData);
        }
}
