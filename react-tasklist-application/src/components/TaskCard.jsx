import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ task }) {


  const {deleteTask} = useContext(TaskContext)


  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete Task
      </button>
    </div>
  );
}

export default TaskCard;
