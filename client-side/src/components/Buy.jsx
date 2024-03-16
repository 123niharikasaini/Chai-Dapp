import { ethers } from 'ethers';
import React from 'react'
import "./buy.css"
const Buy = ({state}) => {
  const buyChai=async(event)=>{
    event.preventDefault();
    const {contract}=state;
    const name=document.querySelector("#name").value
    const msg=document.querySelector("#msg").value
    console.log(name,msg)
    const amount={value:ethers.utils.parseEther("0.0001")}
    const tx=await contract.buyChai(name,msg,amount)
    await tx.wait();
    alert("success")
    window.location.reload();
  }
  return (
    <>
    <div className="center">
       <h1>Thanks</h1>
        <form onSubmit={buyChai}>
          <div className="inputbox">
            <input type="text" required="required" id="name" />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="msg" />
            <span>Message</span>
          </div>
          <div className="inputbox">
            <input type="submit" value="Pay"  disabled={!state.contract}/>
          </div>
        </form>
          
        </div>
    </>
  )
}

export default Buy