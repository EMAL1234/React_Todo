import "./styles.css"
import { useState } from "react"
export default function App(){
 const[newitem,setnewitem]=useState("")
 const[todos,settodos]=useState([])

 function handlesubmit(e)
 {
    e.preventDefault()
    settodos((currenttodo)=>{
        return  [...todos,{id:crypto.randomUUID(),title:newitem,completed:false}]
    })
    setnewitem("")
 }
console.log(todos)
function toggletodo(id,completed){
settodos(currenttodo=>{
  return currenttodo.map(todos=>{
    if(todos.id===id)
    {
      return {...todos,completed}
    }
    return todos
  })
})

}
function deletetodos(id){
  settodos(currenttodo=>{
    return currenttodo.filter(todo=>todo.id!==id)
  })
}
 //setnewitem("")
  return( 
    <>
  <form onSubmit={handlesubmit} className="new-item-form">
     <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input  
      value={newitem} 
     onChange={e=>setnewitem(e.target.value)} 
      type="text" id="item">

      </input>
     </div>
     <button class="btn">Add</button>
  </form>
  <h1 className="header">Todo-List</h1>
  <ul className="list">
    {todos.length===0&&"no todos"}
    {todos.map(todos=>{
      return <li key={todos.id}>
      <label>
        <input type="checkbox" checked={todos.completed} onChange={e=>toggletodo(todos.id,e.target.checked)}/>{todos.title}
        
      </label>
      <button onClick={()=>deletetodos(todos.id)} className="btn btn-danger">Delete</button>
    </li>
    })}
    
    
  </ul>
  </>
  )
  
}