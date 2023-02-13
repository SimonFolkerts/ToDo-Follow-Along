import "./App.css";
import ToDo from "./components/ToDo.js";

function App() {
  // a new string, stored in a variable. We can pass this down to the ToDo child component by using props
  const myString = "hello";

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <section>
        <h2>To-Do List</h2>
        <div className="todos__container">
          {/* here we have added a pair of props to this instance of ToDo, the first one is called title and passes down a variable's value, the second is called status and is simply passing a string. These will be bundled together into a single object which can be accessed in the component */}
          <ToDo title={myString} status="completed" />

          {/* here, another instance of ToDo is being passed the same props but with different values. This means that when this instance of ToDo accesses title and status, it will recieve these different values  */}
          <ToDo title="Go to Gym" status="incomplete" />
        </div>
      </section>
    </div>
  );
}

export default App;
