import React, {
	useEffect,
	useState
} from "react";
// import Web3 from "web3";
import logo from './uniswap-logo.png';

import './App.css';

function App() {
	// const loadWeb3 = async () => {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     await window.ethereum.enable();
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     window.alert(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
  // };

const [fullname, setfullname] = useState({

  account : "0x423423424234342342",
  eth_amount :"0", 
  Deflationary :"1"
})

const inputEvent = (event) =>{
  console.log(event.target.value);
  console.log(event.target.name);


const {name, value} = event.target;
setfullname ((prevlue) =>{
  console.log(prevlue);
return {
  ...prevlue,
[name]:value,
}  
});
  
};

const onSubmits = (event) =>{
  event.preventDefault();
  alert("form Submitted");
};




  return (
    <div className="App">
      <div className="text-center"><img className="logo text-center" src={logo}/></div>
     <form onSubmit="{onSubmits}">
     <div className="card card-body border-0 text-center shadow pt-5">
       <p> {fullname.account}</p>
  <p>{fullname.eth_amount}</p>
  <p>{fullname.Deflationary}</p>
                                    <h5>Uniswap Token Volume Booster</h5>
                                    
                                    <div >Token Address</div>
                                    <div className="" > 
                                    <input className="text-center" type="text" name="account" placeholder="Enter Your Address" onChange={inputEvent} value={fullname.account} /></div>
                                    
                                    <div>ETH Amount (for volume)</div>
                                    <div className="" ><input className="text-center" name="eth_amount" type="text" id="amount"placeholder="Enter Your Address" onChange={inputEvent} value={fullname.eth_amount} /></div>
                                    
                                    <div >Deflationary % (optional)</div>
                                    <div className="" ><input name="Deflationary" className="text-center" type="text"  id="deflationary"placeholder="Enter Your Address" onChange={inputEvent} value={fullname.Deflationary
} /></div>
                                    
                                    
                                    <div>
                                        <div>Fee: ~ <b className="fee">0.0068</b> ETH</div>
                                    </div>
                                    <div className="form-group mt-4 wow fadeInUp btn btn-primary"><button type="submit" id="send">Send</button></div>
                                    <div id="txns"></div>
                                </div>
                                </form>
    </div>
  );
}

export default App;
