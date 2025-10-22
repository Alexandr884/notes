import React from "react"

 export default function Button({onButtonClick,value}){
    
   return ( 
     <button className="button" onClick={onButtonClick} disabled = {!value.trim()}>Add</button>
   )
}