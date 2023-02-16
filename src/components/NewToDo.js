import { useState } from "react";
import "./ToDo.scss";

const NewToDo = (props) => {
  // create state variables to hold the user inputs
  const [title, setTitle] = useState();

  // every time the input's value changes, update the title state variable in realtime
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // then once submit occurs, create a new todo object with the user input that is stored in the state variables
  const handleSubmit = (event) => {
    event.preventDefault();

    // make a new component object
    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false,
    };

    // then access the prop passed down from the parent that contains the function in the parent that can add todos to the array, passing it the new todo that was created here
    props.onAddTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <h1>{title}</h1>
      <label className="new-todo-form__label" htmlFor="title">
        New To-Do
      </label>
      <input
        onChange={handleChange}
        className="new-todo-form__input"
        type="text"
        id="title"
      />
      <button className="new-todo-form__button" type="submit">
        Add New To-Do
      </button>
    </form>
  );
};

export default NewToDo;
