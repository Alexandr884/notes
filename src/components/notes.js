import React from "react"

 export default function Notes ({todo}){

   return ( 
       <div >
         {
            todo.map(item => (
               <div className="note" key={item.id}>
               <>{item.title}</>
               </div> 
            ))
         }
       </div>
            
                    
   )
 }