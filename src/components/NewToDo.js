import { useState, useRef } from "react";
import "./NewToDo.css";

function NewToDo(props) {
  const [title, setTitle] = useState("");

  const inputRef = useRef(null);

  const handleChange = (event) => setTitle(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo({
      id: Math.random(),
      title: title,
      status: false,
    });
    setTitle("");
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">New ToDo</label>
        <input
          type="text"
          name="new-todo"
          id="new-todo"
          value={title}
          ref={inputRef}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default NewToDo;
