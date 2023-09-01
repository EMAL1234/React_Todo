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
 }
// function handlesubmit(e)
// {
//   e.preventDefault() 
//   settodos([...todos,{id:crypto.randomUUID(),title:newitem,completed:false}])
// }
console.log(todos)
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
    <li>
      <label>
        <input type="checkbox"/>item 1
        
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>item 2
        
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
  
}