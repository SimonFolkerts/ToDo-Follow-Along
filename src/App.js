import "./App.css";
import ToDo from "./components/ToDo.js";

function App() {
  const myTodos = [
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
  ];
  const myToDoComponents = myTodos.map(function (todo) {
    return <ToDo key={todo.id} title={todo.title} status={todo.completed} />;
  });

  return (
    <div className="App">
      <h1>"My To-Do List"</h1>
      <section>
        <h2>To-Do List</h2>
        <div className="todos__container">{myToDoComponents}</div>
      </section>
    </div>
  );
}

export default App;
