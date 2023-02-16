import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewToDo.js";
import ToDo from "./components/ToDo.js";

function App() {
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

  const addTodo = (newTodo) => {
    setTodos((currentTodos) => [...currentTodos, newTodo]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const myToDoComponents = todos.map(function (todo) {
    return (
      <ToDo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        status={todo.completed}
        onDeleteTodo={deleteTodo}
      />
    );
  });

  return (
    <div className="App">
      <h1>"My To-Do List"</h1>
      <NewTodo addTodo={addTodo}></NewTodo>
      <section>
        <h2>To-Do List</h2>
        <div className="todos__container">{myToDoComponents}</div>
      </section>
    </div>
  );
}

export default App;
