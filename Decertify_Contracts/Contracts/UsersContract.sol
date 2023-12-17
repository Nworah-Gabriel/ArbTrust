// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

///A contract for storing users of an app
contract Users{

    address public _owner;
    enum group{
        NFT_Issuer,
        NFT_Claimer
    }

     ///A structure for storing an account secret phrase
    struct Phrase{
        string[12] words;
    }

    ///A structure for storing an account secret phrase
    struct Collections{
        string Title;
    }

    ///A structure for grouping a user data
    struct User{
        string first_name;
        string last_name;
        string username;
        string email_address;
        address walletAddress;
        group userGroup;
        Collections NFT_Collections;
        Phrase secret_phrase;
    }

  ///declaring an array of User struct
  User[] users;

    ///A function created to claim a the written contract
    function claimOwnership(address new_owner, address old_owner) external  returns(string memory){
     
      require(_owner == old_owner, "invalid address for the current owner");
      _owner = new_owner;
      return ("contract ownership claimed successfully");
      }


    
    ///A function for initializes and stores a user under the "User" struct
    ///The function takes in the data to be grouped under the structure,
    ///initializes the struct element and stores it in the "users" array.
    function createUser(
      string calldata _first_name,
      string calldata _last_name,
      string calldata _username,
      address _wallet_address,
      group userType,
      string[12] calldata _secretPhrase,
      string calldata _email_address
      ) public returns (User memory) {

      uint j = 0;

      //checks if a wallet address already exists
      while(j != users.length){
        require( users[j].walletAddress != _wallet_address, "An account already has this wallet address");
        j++;
      }

      User memory new_user;
      new_user.first_name = _first_name;
      new_user.last_name = _last_name;
      new_user.walletAddress = _wallet_address;
      new_user.email_address = _email_address;
      new_user.username = _username;
      new_user.userGroup = userType;

      require(_secretPhrase.length == 12, "Number of words incomplete or exceeded");
      for(uint i = 0; i < 12; i++){
        new_user.secret_phrase.words[i] = _secretPhrase[i];
      }

      users.push(new_user);
      return new_user;
  }


    ///A function that gets an existing account in the user array
    function getUser(uint index) external view returns (User memory){
      require(index < users.length, "This User doesn't exist");
      return users[index];
  }

  function getTotalUser() external view returns (uint){
      return users.length;
  }

   ///A function that deletes an existing account in the user array using it's index
    function deleteUser(uint index) internal returns (string memory){
      require(index < users.length, "This User doesn't exist");
      string memory username = users[index].username;

      if (users.length == 1){
        users.pop();
      } 
      else if(users.length > 1){
        uint i = index;
        if (users.length - 1 == index){
          users.pop();
        } else{
          while(i <= users.length){
            if (users.length - 1 == i){
              break;
            }
            users[i] = users[i + 1];
            i += 1;
          }
          users.pop();
        }
      }

      return username;
    }

    //A function that checks if the user falls in the NFT issuer category
    //and is eligible to create NFT collection.
    function AuthorizeUser(address _userAddress) public view returns (bool){
        User memory user;
        for(uint count = 0; count <= users.length; count++){
            if (users[count].walletAddress == _userAddress){
                user = users[count];
                break;
            }
        }

        if (user.userGroup == group.NFT_Issuer){
            return (true);
        }
        return(false);
    }
    
    //A function that checks if the user is a registered user
    function AuthenticateUser(address _userAddress, string[12] memory _secretPhrase) public view returns (bool){
    User memory user;
    string[12] memory password;

    for(uint count = 0; count <= users.length; count++){
      if (users[count].walletAddress == _userAddress){
        user = users[count];
        break;
      }
    }

    for(uint new_count = 0; new_count < 12; new_count++){
      password[new_count] = user.secret_phrase.words[new_count];
    }

    for(uint new_count = 0; new_count < 12; new_count++){
      if(keccak256(abi.encodePacked(_secretPhrase[new_count])) == keccak256(abi.encodePacked(password[new_count]))){
        continue;
      }
      else{
        return false;
      }
    }
    return true;
  }

}