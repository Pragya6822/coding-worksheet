import React ,{ useState } from 'react'
import './App.css'

const useTodo = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task)=> {
    setTasks(prevTask => [...prevTask, task])
  }

  const removeTask = (task)=> {
    setTasks(prevTask => preTask => prevTask.filter(t => t !== task))
  }

  const resetTask = (task)=> {
    setTasks([])
  }

  return{
    tasks,
    addTask,
    removeTask,
    resetTask,
  }
}; 

const App = ()=> {
  const {tasks, addTask, removeTask, resetTask,} = useTodo();
  const [inputValue , setInputValue] = useState('')

  const handleAddTask =() =>{
    const task = String(inputValue).trim();
    if(task){
      addTask(task)
    }else{
      alert('error task')
    }
    setInputValue('')
  }

  const handleRemoveTask =(task) =>{
    removeTask(task)
  }

  const handleResetTask =() =>{
    resetTask(task);
  }

  return (
    <div>
     <h1>ToDo List</h1>
 
     <div>
       <input type="text" 
       placeholder='Enter your Task...'
       onChange ={(e) => setInputValue(e.target.value)}/>
       <button onClick={handleAddTask}>Add Task</button>
     </div>
 
     <ul>
      {tasks.length ===0 ? (
        <li>No Tasks Found</li>
      ) : (
        tasks.map((tasks, index) => {
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(task)}>Remove</button>
          </li>
        })
      )}
     </ul>

     <button onClick={handleResetTask}>Delete All Tasks</button>
    </div> 
   )
}



export default App
