import TaskList from "./TaskList";
import { TaskForm } from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks ,task])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={data}/>
    </>
  );
}

export default App;
