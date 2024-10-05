import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Navbar from './Navbar'

function Todolist() {
  const [todo,settodo]=useState("");
  const [todos,settodos]=useState([]);
  
// useEffect(() => {
//   console.log(JSON.parse(localStorage.getItem("todos")))
//   settodos(JSON.parse(localStorage.getItem("todos")))
// },[]);

  // const savelocal= ()=>{
  //   localStorage.setItem("todos",JSON.stringify(todos))
  //   console.log("Hello")
  // }
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) settodos(savedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);
  
  const handleadd=async()=>{
    await settodos([...todos,{id: uuidv4(),todo,iscompleted:false}])
    // savelocal();
    settodo("")
  }
  const handledelete=(e)=>{
    var id=e.target.name
    var b=alert("Are you sure to Delete")
    
    var a=[...todos]
    let index=todos.findIndex(item=>{
      return item.id===id
    })
    a.splice(index,1)
    settodos(a)
    // savelocal();
  }
  
  const handleedit=(e)=>{
    var id=e.target.name
    
    var a=[...todos]
    let index=todos.findIndex(item=>{
      return item.id===id
    })
    
    var str=a[index].todo
    a.splice(index,1)
    settodos(a)
    settodo(str)
    // savelocal();
  }
  
  
  const handlechange=(e)=>{
    settodo(e.target.value)
    
  }
  const handlecheck=async(e)=>{
    var id=e.target.name;
    let a=[...todos]
    a.map(item=>{
      if(item.id==id)
        item.iscompleted=!item.iscompleted
    })
    
    settodos(a);
    // savelocal();
  }

 
  return (
    <>
    
     <hr />

     <div className="container mx-auto mt-14 w-[80vw] bg-gray-200 rounded-2xl p-8 h-min-[80vh]"> 
      <div className="todoadd ">
        <h2 className='text-xl text-green-900 font-medium p-3 my-3'>Add Yours Tasks here: </h2>
        <div className='flex justify-around items-center p-2'>
        <input value={todo} onChange={handlechange} className='m-2 w-1/2 p-1' type="text" />
        <button className='px-4 py-1 bg-green-700 rounded-md' onClick={handleadd}>Add</button>
        </div>
      </div>
      <div className="line h-[1px] bg-green-700 w-full m-2"></div>
      <h2 className='font-bold text-2xl p-2 my-2'>Yours Todo's</h2>
      <div className="line h-[1px] bg-green-700 w-full m-2"></div>
      <div className="todos">
        {todos.map(item=>{
        return <div key={item.id} className="todo bg-gray-300 rounded-md flex justify-between gap-2 m-3 p-2">
         <div className='flex gap-1'>
          <input type="checkbox" name={item.id} onChange={handlecheck}  />
          <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons ">
            <button className='bg-green-700 px-3 py-1 rounded-md mx-3' onClick={(e)=>handleedit(e)} name={item.id}>Edit</button>
            <button className='bg-green-700 px-3 py-1 rounded-md mx-3' onClick={(e)=>handledelete(e)} name={item.id}>Delete</button>
          </div>
        </div>
           })}
      </div>
     </div>
    </>
  )
}

export default Todolist ;
