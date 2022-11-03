import { TaskList } from "./TaskList";
import Taskform from "./Taskform";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


function createTask(taskTitle) {
  setTasks([...tasks, {
    title: taskTitle,
    id: tasks.length,
    description: "Algo nuevo"
  }]);
}

  return (
    <>
      <Taskform createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
