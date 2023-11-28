# resolve the reload problem
const submitHandler =(e) =>{
    e.preventDefault();
  }

  <form onSubmit={submitHandler}>
  </form>

# to run a multiple time task
const [tasks,setTasks] = useState([]); 
{tasks.map(() => {
        return <Task />;
      })}

      or

{tasks.map(() => (
    <Task />
    ))}

when we use map in react we have to pass the unique key
 {tasks.map((item,index) => {
        return <Task key ={index} />;
      })}


instead of
<task/> only

# how to use state
1)  const [title,setTitle] = useState("");

2) inside the input
 value={title} 
        onChange={(e) =>{setTitle(e.target.value)}} /> 
    