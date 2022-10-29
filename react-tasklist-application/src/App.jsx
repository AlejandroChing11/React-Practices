import TaskList from "./TaskList";
import { TaskForm } from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskForm />
      <TaskList tasks={data}/>
    </>
  );
}

export default App;
