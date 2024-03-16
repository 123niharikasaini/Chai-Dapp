// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract Chai {
    struct Memo{
        string name;
        string msg;
        uint256 timestamp;
        address from;
    }

    Memo[] memos;

    address payable owner;

    constructor() {
        owner=payable (msg.sender);
    }
    
    function buyChai(string calldata name,string calldata message ) external payable  {
        require(msg.value>0, "yrrrrrr, atleast pay");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));

    }

    function getMemo()public view returns (Memo[] memory) {
        return memos;
    }
}