import { push, ref } from "firebase/database"
import React from "react"
import { db } from "./firebase"

 export default function Button({onButtonClick,value,id}){
    
   return (
              <button className="button" onClick={() => onButtonClick(push(ref(db,id),value))} disabled = {!value.trim()}>Add</button>
   )
}
