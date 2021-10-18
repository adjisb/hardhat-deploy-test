//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Greeter.sol";
import "./Iface.sol";

contract Impl is Greeter, Iface {
}
