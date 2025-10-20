 import React from "react"

 export default function Input({value,setValue}){ 

   return ( 
    <input className="input" type = "text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add new task"/>
   )
}