import React, { useEffect, useState } from 'react'
import "./Memos.css"

const Memo = ({state}) => {
  const [memos,setMemo]=useState([])
  const {contract}=state;

  useEffect(()=>{
    const memoMsg=async()=>{
      const memo=await contract.getMemo()
      setMemo(memo)
      // console.log(memos)
    }

    contract && memoMsg()
  },[contract])

  return (
    <>
    <div className="container-fluid">
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>           
                <table>
                <tbody >
          {memos.map((memo) => {
            return (
                    <tr >
                      <td 
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "100px",
                          color:"white",
                         
                        }}
                      >
                        {memo.name}
                      </td>
                      <td 
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "800px",
                          color:"white"
                        }}
                      >
                        {/* for date */}
                        {new Date(memo.timestamp * 1000).toLocaleString()}
                      </td>
                      <td  
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "300px",
                          color:"white"
                        }}
                      >
                        {memo.msg}
                      </td>
                      <td  className="container-fluid"
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "400px",
                          color:"white"
                        }}
                      >
                        {memo.from}
                      </td>
                    </tr>
             
            );
          })}
               </tbody>
                </table>
        </div>
    </>
  )
}

export default Memo