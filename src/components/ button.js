import React from "react"

 export default function Button({onButtonClick}){
    
   return ( 
     <button className="button" onClick={onButtonClick} >Add</button>
   )
}