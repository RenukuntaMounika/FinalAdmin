import React from "react"
import Custombar from "./Components/Navbar"
import Qform from "./Components/Qform"
function Form() {
    const formStyle={
          padding:"50px",
          backgroundColor:"	#F0F0F0",    
          borderRadius: "5px",
          backgroundColor: "#f2f2f2",
    };
    return (
         <div style={{margin:"20px"}}>
             <div><Custombar style={{margin:"20px"}}/></div>
            <div className="container" style={formStyle} >{<Qform/>} </div>
        </div>
        )
    }
    
    
    export default Form