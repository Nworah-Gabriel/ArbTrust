// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "./UsersContract.sol";

interface ICertificateNFT {
function UpdateMintStatus(string memory _status) external;

    function updateContractDeployer(address _address)external;

    function mintCertificate(
        address _to,
        uint _tokenId,
        string calldata _uri,
        string[12] memory _secretPhrase
    ) payable external;

    function transferCertificate(
        address _to,
        address _from,
        uint _tokenId,
        string[12] memory _secretPhrase
    )payable external;

    function CheckCertificateOwnership(
        uint _tokenId
    ) external view;

    function viewContractDeployer() external view returns(address);

    function GetMintStatus() external view returns(string memory status);
}

contract CertificateNFT is ERC721URIStorage{

    constructor(string memory contractname,
    string memory symbol,
    address _deployerAddress,
    address _UserContractAddress
    ) ERC721(contractname, symbol){
    
        console.log("Contract Name:", contractname);
        console.log("Contract symbol:", symbol);
        console.log("Contract deployer:", msg.sender);
        contractDeployer = payable(_deployerAddress);
        UserContractAddress = payable(_UserContractAddress);
    }
    address payable public contractDeployer;
    address payable public UserContractAddress;
    string CertificateMintStatus;
    mapping(address => mapping(address => string)) public UploadedCertificates;
    Users userContract = Users(UserContractAddress);
    event log(string, uint);
    
    receive() external payable {
        emit log("Amount recieved", msg.value);
    }
    fallback() external payable {
        emit log("Amount recieved", msg.value);
    }

    ///A function for updating the state variable "CertificateMintStatus" for test purpose
    function UpdateMintStatus(string memory _status) public{
        CertificateMintStatus = _status;
    }

    ///A function that updates a state variable
    function updateContractDeployer(address _address)external{
        contractDeployer = payable(_address);
    }

    ///A function created for minting certificate as NFT
    function mintCertificate(
        address _to,
        uint _tokenId,
        string calldata _uri,
        string[12] memory _secretPhrase
    ) external {
        bool userExists;
        (userExists) = _AuthenticateUser(_to, _secretPhrase);
        if(userExists == true){
            if (keccak256(abi.encodePacked(UploadedCertificates[contractDeployer][_to])) == keccak256(abi.encodePacked(_uri))){
            _mint(_to, _tokenId);
            _setTokenURI(_tokenId, _uri);
            UpdateMintStatus("Success");
            }
            else{
                UpdateMintStatus("Failed");
            }
        } 
    }

    ///A function created for transfering certificate ownership
    function transferCertificate(
        address _to,
        address _from,
        uint _tokenId,
        string[12] memory _secretPhrase
    )payable external{
        bool userExists;        
        (userExists) = _AuthenticateUser(_to, _secretPhrase);
        if(userExists == true){
            approve(_to, _tokenId);
            safeTransferFrom(_from, _to, _tokenId);
        }
    }

    ///A function created for storing uploaded certificates
    function StoreUploadedCertificate(
        address _sender,
        address _reciever,
        string memory _IPFS_Url,
        string[12] memory _secretPhrase
    ) external payable returns (bool) {
        bool userExists;
        bool userIsAnIssuer;
        (userExists) = _AuthenticateUser(_sender, _secretPhrase);
        if(userExists == true){
            (userIsAnIssuer) = _AuthorizeUser(_sender);
            if(userIsAnIssuer == true){
                UploadedCertificates[contractDeployer][_reciever] = _IPFS_Url;
                return (true);
            }
        }
        return (false);
    }

    ///A function to check an NFT owner
    function CheckCertificateOwnership(
        uint _tokenId
    ) external view{
        ownerOf(_tokenId);
    }

     ///A function for returning the state variable "contractDeployer" for test purpose
    function viewContractDeployer() external view returns(address){
        return(contractDeployer);
    }

    ///A function for returning the state variable "CertificateMintStatus" for test purpose
    function GetMintStatus() external view returns(string memory status){
        status = CertificateMintStatus;
        return(status);
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
}
