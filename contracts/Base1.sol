//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Base1 {
    string private greeting;

    constructor() {
        greeting = "ASD";
    }

    function base1() public view returns (string memory) {
        return greeting;
    }
}
