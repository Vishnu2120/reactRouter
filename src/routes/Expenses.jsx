import { Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"
import { setInvoices } from "../data";

function Expenses() {
  
  let nameInput = React.createRef(); 
  let addrInput = React.createRef();
  let webaddrInput =React.createRef();
  let onOnclickHandler=()=>{
    const name =nameInput.current.value;
    const addr= addrInput.current.value;
    const web =webaddrInput.current.value;
    // console.log(nameInput.current.value)
    // console.log(addrInput.current.value)
    
    let state = {
      name : name,
      address : addr,
      website: web
  }
  setInvoices(state)
  console.log(state);
  console.log(JSON.stringify(state));
    //const convertJson = JSON.stringify(name)
///console.log(convertJson);

  }
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Add JsonData</h2>
         <div>
           <div><label className="label-json">Name:</label><input ref={nameInput}  className="Input-json" type="text"></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Address:</label><input ref={addrInput} className="Input-json" type="text"></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Website:</label><input ref={webaddrInput} className="Input-json" type="text"></input></div>
           <div className="dummy"></div>
           <div><label className="label-json"></label><Link to='/invoices'><Button onClick={onOnclickHandler}>Add</Button></Link></div>
         </div>
      </main>
    );
  }
  export default Expenses;