import "./App.css";
import ToDo from "./components/ToDo.js";

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <section>
        <h2>To-Do List</h2>
        <div className="todos__container">
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
        </div>
      </section>
    </div>
  );
}

export default App;
