import React,{useEffect, useState} from 'react';
import Task from './task';


const home = () => {
  //intial will be local storage instead of array
  const initialArray = localStorage.getItem("tasks") 
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

  const [tasks,setTasks] = useState(initialArray);

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val,i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  }
  
  const submitHandler =(e) =>{
    e.preventDefault();

    //spread operator for add new data in the array
    setTasks([...tasks,{title,description}]);
    setTitle("")
    setDescription("");

  }
  useEffect(() =>{

    localStorage.setItem("tasks",JSON.stringify(tasks));

  },[tasks])
  return (
    <div className = "container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder="title" 
        value={title} 
        onChange={(e) =>{setTitle(e.target.value)}} />

        <textarea 
        placeholder='Description' 
        value={description} 
        onChange={(e) =>{setDescription(e.target.value)}}
        >
        </textarea>

        <button type="submit">ADD</button>
      </form>
      {tasks.map((item,index) => {
        return <Task 
        key ={index}  
        title = {item.title} 
        description = {item.description} 
        deleteTask={deleteTask}
        index={index}
        />;
      })}
    </div>
  )
}

export default home