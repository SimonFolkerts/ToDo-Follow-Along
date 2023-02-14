import "./ToDo.css";
// by adding the 'props' parameter to the component function, it can now access incoming data from the parent
function ToDo(props) {
  // we can use an if statement that checks if props.status is true or false
  // if it is true, this if statement puts a bit of JSX markup into the `completedMarkup` variable - if false, it leaves it undefined. We can then put this variable into the return section of this component where its contents will be rendered.
  let completedMarkup;

  if (props.status) {
    completedMarkup = (
      <div>
        <h2>Congratulations!</h2>
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="black dog success image"
        />
      </div>
    );
  }

  return (
    // if props.status is true, the className will contain "todo completed". If false it will contain just "todo". This is because the ternary operator will evaluate to either " completed" or "", which is then added to "todo"
    <div className={"todo" + (props.status ? " completed" : "")}>
      <h3 className="todo__title">{props.title}</h3>

      {/* the p tag will contain "Status:" plus either Completed or Incomplete depending on if props.status is true or false */}
      <p>Status: {props.status ? "Completed" : "Incomplete"}</p>

      {/* this is the variable that contains either some JSX markup, or is undefined. React will read this variable and render whatever is inside it here */}
      {completedMarkup}
    </div>
  );
}

export default ToDo;
