//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Base0 {
    string private greeting;

    constructor() {
        greeting = "ASD";
    }

    function base0() public view returns (string memory) {
        return greeting;
    }
}
