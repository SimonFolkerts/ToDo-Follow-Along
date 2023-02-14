import "./App.css";
import ToDo from "./components/ToDo.js";

// We now have an array of todo objects that represent the tasks to be done
// We want to generate from this array of todo objects, a new array of ToDo components that have this data injected into them as props
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

// myTodos.map() can be used to generate a new array that contains the JSX HTML output necessary to render the ToDo components.
// for each object in the original array, the map helper function shown below will create a new piece of HTML that contains the specific data of the original object as props.
// We can then insert the array of new component HTML into the JSX below
const myToDoComponents = myTodos.map(function (todo) {
  return <ToDo title={todo.title} status={todo.completed} />;
});

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <section>
        <h2>To-Do List</h2>
        {/* Here we can just insert the new array of HTML and react will render it */}
        <div className="todos__container">{myToDoComponents}</div>
      </section>
    </div>
  );
}

export default App;
