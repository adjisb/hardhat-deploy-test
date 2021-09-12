//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./BaseA.sol";
import "./BaseB.sol";

contract GreeterUpgradeable {
    string private greeting;
    uint256 y;

    function init(uint256 x) external {
        y = x;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
