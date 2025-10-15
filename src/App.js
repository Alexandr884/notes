import './index.css'
import { useState } from "react";
import Button from "./components/ button";
import Input from "./components/input";
import Notes from "./components/notes";

 export default  function App() { 
  const [todo,setTodo] = useState ([
   {
      id:1,
      title: 'opa',
      status: true
   },
   {
      id:2,
      title: 'opa',
      status: true
   },
   {
      id:3,
      title: 'opa',
      status: true
   }
  ])
   return (
   <div className="container">
      <div className="task-bar">
         <Input />
         <Button />
         </div>
         <Notes todo={todo} setTodo={setTodo} />
      </div>
)};

