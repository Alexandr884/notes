import './index.css'
import { useState } from "react";
import Input from "./components/input";
import Notes from "./components/notes";
import Button from './components/ button';

 export default  function App() { 

  const [todo,setTodo] = useState ([])
 
   const [value,setValue] = useState("");
    
   const saveButton = () => {
      
        setTodo(
          [ ...todo,{
            id: Math.random().toString(36).slice(2),
            title: value 
          }] 
         )
         setValue("") 
      }
        

   return (
   <div className="container">
      <div className="task-bar">
         <Input  value={value} setValue={setValue}/>
         <Button onButtonClick = {saveButton} value={value}/>
         </div>
         <div className="list">
              <Notes todo = {todo} setTodo={setTodo}/>
         </div>
      </div>
)};

