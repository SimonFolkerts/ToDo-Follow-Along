import { useState } from "react";
import "./ToDo.scss";

function ToDo(props) {
  // this line of code uses the useState hook to request a pointer to special persistent variable that can remember data and trigger updates in the DOM when it is changed. We also get a setter function that we can use to update the variable since we can't directly access it (we have a pointer to it, not the variable itself)
  // useState returns these two items (the pointer and the setter) in an array. The first item is always the pointer and the second item is always the setter
  // the syntax used here is called array destructuring and is a shortcut to put the items in an array into separate variables, so here we get the pointer into a variable called completionStatus and the setter function into setCompletionStatus
  const [completionStatus, setCompletionStatus] = useState(props.status); // we use the prop as the starting value, and after that it is tracked independently
  // we can then read completion status, or update it with the setter. Updating it causes the component to refresh and re-render, saving the new value rather than discarding it and reinitializing

  // this handler function will use the setter to update the value of the completionStatus state variable. Updating the variables triggers a refresh of the component, causing it to be redrawn. The variable will remember the value assigned to it during this redraw
  const clickHandler = (event) => {
    setCompletionStatus(!completionStatus); // this flips the value to the opposite of what it was, toggling back and forth between true and false
  };

  // throughout the JSX output of this component, instead of referencing the array from App.js, we can reference this special container that stores the state of the ToDo independantly. When it is updated from true to false, or vice versa, the entire component re-renders and displays the new value. This allows the component to keep track of its own state independently
  return (
    // we can add a click listener to the ToDo that triggers a handler function
    <div
      onClick={clickHandler}
      className={
        "todo" +
        (completionStatus /* changed to use the state variable */
          ? " completed"
          : "")
      }
    >
      <h3 className="todo__title">{props.title}</h3>

      <p>
        Status:{" "}
        {completionStatus /* changed to use the state variable */
          ? "completed"
          : "incomplete"}
      </p>
    </div>
  );
}

export default ToDo;
