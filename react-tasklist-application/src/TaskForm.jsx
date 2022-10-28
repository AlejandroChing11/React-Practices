import { useState } from "react";

export function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}
