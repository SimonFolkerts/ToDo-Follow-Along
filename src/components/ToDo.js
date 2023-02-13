import "./ToDo.css";
// by adding the 'props' parameter to the component function, it can now access incoming data from the parent
function ToDo(props) {
  return (
    <div className="todo">
      {/* here we are expressing the value of the title prop */}
      <h3 className="todo__title">{props.title}</h3>
      {/* and here we are expressing the value of the status */}
      <p>Status: {props.status}</p>
    </div>
  );
}

export default ToDo;
