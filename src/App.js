import { useState } from "react";
import "./App.scss";
import NewToDo from "./components/NewToDo";
import ToDo from "./components/ToDo";

function App() {
  // convert todos array to state variable rather than regular variable
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Finish Project",
      completed: false,
    },
    {
      id: 1,
      title: "Make Lunch",
      completed: false,
    },
    {
      id: 2,
      title: "Watch Show",
      completed: true,
    },
  ]);

  // create a function that can overwrite the old array with a new one that contains everything in the old one, plus a new Todo that is passed into the function as a paremeter
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // modify the ToDo component list rederer to point to the new state variable rather than the old regular variable
  const myToDoComponents = todos.map(function (todo) {
    return <ToDo key={todo.id} title={todo.title} status={todo.completed} />;
  });

  return (
    <div className="App">
      <h1>"My To-Do List"</h1>
      {/* pass the function that can add new todos to the new state variable down to the child */}
      <NewToDo onAddTodo={addTodo}></NewToDo>
      <section>
        <h2>To-Do List</h2>
        <div className="todos__container">{myToDoComponents}</div>
      </section>
    </div>
  );
}

export default App;
