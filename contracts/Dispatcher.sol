pragma solidity ^0.4.11;

import "./common/Owned.sol";

contract Dispatcher is Owned {

    // DApp must always get this addresses to use last version of contract
    address public currentRedSunCryptoTokenAddress;
    address public currentMarketAddress;

    function Dispatcher() {
        owner = msg.sender;
    }

    function setCurrentRedSunCryptoTokenAddress(address _address) onlyOwner {
        currentRedSunCryptoTokenAddress = _address;
    }

    function setCurrentMarketAddress(address _address) onlyOwner {
        currentMarketAddress = _address;
    }
}
