// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }

    receive() external payable {
        buyTokens();
    }

    function buyTokens() public payable {
        require(msg.value > 0, "Amount must be greater than 0");
        uint256 ethRequired = msg.value;
        uint256 tokensToBuy = ethRequired / getTokenPrice();
        require(tokensToBuy > 0, "Insufficient ETH sent");

        _mint(msg.sender, tokensToBuy);
    }

    function sellTokens(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        uint256 ethToTransfer = amount * getTokenPrice();
        require(address(this).balance >= ethToTransfer, "Insufficient contract balance");

        _burn(msg.sender, amount);
        payable(msg.sender).transfer(ethToTransfer);
    }

    function getTokenPrice() public pure returns (uint256) {
        // Implement your pricing mechanism here
        return 1 ether; // 1 token = 1 ETH for simplicity
    }
}