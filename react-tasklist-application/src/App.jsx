import { TaskList } from "./components/TaskList";
import Taskform from "./components/Taskform";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


function createTask(task) {
  setTasks([...tasks, {
    title: task.title,
    id: tasks.length,
    description: task.description
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
