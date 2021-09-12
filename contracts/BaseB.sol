//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Base0.sol";

contract BaseB is Base0 {
    string private greeting;

    constructor() {
        greeting = "ASD";
    }

    function baseB() public view returns (string memory) {
        return greeting;
    }
}
