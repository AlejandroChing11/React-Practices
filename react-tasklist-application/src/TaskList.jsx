import { tasks as data} from "./task";
import { useState, useEffect } from "react";


function TaskList() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);     

  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>
  }

  return (
    <div>
      {task.map((task) => (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
