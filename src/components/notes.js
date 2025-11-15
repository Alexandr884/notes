import React, { useState } from "react"

 export default function Notes ({todo,deliteTodo,setTodo}){

   const [edit,setEdit] = useState("");

   const [editvalue,setEditvalue] = useState()

   const editTodo = (id,title) => {
       setEdit(id);
       setEditvalue(title)
   }
    
   const saveEdit = (id) => {
      const newTodo = [...todo].map(item => {
         if(item.id === id) {
           item.title = editvalue;
         }
         return item
      })
      setTodo(newTodo);
      setEdit("")
   }


   return ( 
      <div className="notes">
         {
            todo.map(item => ( 
               <div className="note" key={item.id}>
                  {
                     edit === item.id ? 
                     <div className="edit-container">
                        <input className="edit-input" value={editvalue} onChange={(e) => setEditvalue(e.target.value)}/>
                        <button className="save-button" onClick={() => saveEdit(item.id)}>Save</button>
                     </div>  : 
                     <>
                      <p className="title">{item.title}</p>
                      <button className="edit-button" onClick={() => editTodo(item.id,item.title)}>Edit</button>
                      <button className="delite-button" onClick={() => deliteTodo(item.id)}>Delite</button>
                      </>
                  }
              
               </div>
            ))
         } 
         </div>          
   )
 }