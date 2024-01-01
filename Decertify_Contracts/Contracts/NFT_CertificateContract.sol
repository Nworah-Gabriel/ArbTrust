// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "./UsersContract.sol";

contract CertificateNFT is ERC721URIStorage, Users{

    constructor(string memory contractname, string memory symbol, address _deployerAddress) ERC721(contractname, symbol){
        console.log("Contract Name:", contractname);
        console.log("Contract symbol:", symbol);
        console.log("Contract deployer:", msg.sender);
        contractDeployer = payable(_deployerAddress);
    }
    address payable contractDeployer;
    string CertificateMintStatus;

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
    ) payable external {
        bool userExists;
        (userExists) = AuthenticateUser(_to, _secretPhrase);
        if(userExists == true){
            _mint(_to, _tokenId);
            _setTokenURI(_tokenId, _uri);
            UpdateMintStatus("Success");
        } 
    }

    ///A function created for transfering certificate ownership
    function transferCertificate(
        address _to,
        address _from,
        uint _tokenId,
        string[12] memory _secretPhrase
    )payable external {
        bool userExists;
        (userExists) = AuthenticateUser(_to, _secretPhrase);
        if(userExists == true){
            approve(_to, _tokenId);
            safeTransferFrom(_from, _to, _tokenId);
        }
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

        ///A function that gets an existing account in the user array
    function UpdateUserNFT_Collection(
      address _userAddress,
      string calldata _title,
      string calldata _IPFS_Url,
      string[12] memory _secretPhrase
      ) external view returns (string memory){
      
      User memory user;
        for(uint count = 0; count <= users.length; count++){
            if (users[count].walletAddress == _userAddress){
                user = users[count];
                break;
            }
        }
        bool userExists;
        bool userIsAnNFT_Issuer;
        //Authenticates the user
        (userExists) = AuthenticateUser(_userAddress, _secretPhrase);
        if(userExists == true){
            //Authorizes the user
            (userIsAnNFT_Issuer) = AuthorizeUser(_userAddress);
            if(userIsAnNFT_Issuer == true)
            {
                Collections memory NewCollection;
                NewCollection.Title = _title;
                NewCollection.IPFSUrlLink = _IPFS_Url;
                
                if(user.CollectionCount == 0){

                    user.NFT_Collections[0] = NewCollection;
                    user.CollectionCount = user.NFT_Collections.length;
                } 
                else if(user.CollectionCount > 0){

                    user.NFT_Collections[user.CollectionCount] = NewCollection;
                    user.CollectionCount = user.NFT_Collections.length;
                }
            }
        }
    return "SUCCESS";
  }
   
}
