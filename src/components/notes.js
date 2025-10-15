import React from "react"

 export default function Notes ({todo,setTodo}){
   return ( 
      <div> 
            {  
                todo.map(item => ( 
                    <div className="note" > 
                    <div className="notes" key={item.id}>
                       {item.title}
                    </div>
                    <button className="delete">Delete</button>
                    <button className="edit">Edit</button>
                     </div>
                ))
            }
         </div>
   )
}