import React from "react"

 export default function Notes ({todo}){

   return ( 
      <div className="notes">
         {
            todo.map(item => ( 
               <div className="note" key={item.id}>
               <p className="title">{item.title}</p>
               </div>
            ))
         } 
         </div>          
   )
 }