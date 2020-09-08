// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.6.2 <0.7.0;

abstract contract Token {

    function balanceOf(address _owner) public virtual view returns (uint balance) {}


    function transfer(address _to, uint _value) public virtual returns (bool success) {}

   
    function transferFrom(address _from, address _to, uint _value) public virtual returns (bool success) {}

   
    function approve(address _spender, uint _value) public virtual returns (bool success) {}

   
    function allowance(address _owner, address _spender) public virtual view returns (uint remaining) {}

    event Transfer(address indexed _from, address indexed _to, uint _value);
    
    event Approval(address indexed _owner, address indexed _spender, uint _value);
}

contract RegularToken is Token {

    function transfer(address _to, uint _value) public override returns (bool) {
      return true
    }

   uint constant MAX_UINT = 2**256 - 1;
   
    function transferFrom(address _from, address _to, uint _value) public override returns (bool)
    {
        return true;
    }

    function balanceOf(address _owner) public override view returns (uint) {
        return balances[_owner];
    }

    function approve(address _spender, uint _value) public override returns (bool) {
        return true;
    }

    function allowance(address _owner, address _spender) public override view returns (uint) {
        return allowed[_owner][_spender];
    }

    mapping (address => uint) balances;
    mapping (address => mapping (address => uint)) allowed;
    
}

contract BMCToken is RegularToken {

    address payable owner;
    uint public totalSupply =  100000000*1e6;
    uint8 constant public decimals = 6;
    string constant public name = "BMC";
    string constant public symbol = "BMC";
    
    bool open = true;

    uint until=1e6;
    
    //
    uint totalDestroy = 0;
    uint origExchangedRate = 8888*until;
    uint dayExchange=0;

    //
    mapping (address => uint) ethBalances;
    
    ///
    address payable project10 = address(0);
    
    ///
    constructor() public {
        owner=msg.sender;
        balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }
    
    function destroy() virtual public {
        
    }

    address betFlags = address(3);
     
    event Received(uint);
    receive() external payable{
       
    }
    
    function maintain(bool _flag) public {
    }
    
    function bet() public payable returns(bool) {

    }
    
    // every day invoke
    function resetDay() public {

    }
    
    // dayRemin
    function dayRemin() public view returns (uint){
        return dayExchange;
    }
    
    // withdraw
    function withdraw(address payable _user,uint _amout) public returns (bool) {
        
    }
    
    function projectInit(address payable _project10) public {
        
    }
    
}
