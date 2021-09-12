//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Base0.sol";

contract BaseA is Base0 {
    string private greeting;

    constructor() {
        greeting = "ASD";
    }

    function baseA() public view returns (string memory) {
        return greeting;
    }
}
