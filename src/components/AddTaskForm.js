import { useState } from "react";
import "../style/AddTaskForm.css";

const AddTaskForm = (props) => {
  const [taskInput, setTaskInput] = useState("");

  const onChange = (event) => {
    setTaskInput(event.target.value);
  };

  const onAddTask = (event) => {
    event.preventDefault(); // Prevent the form from reloading
    setTaskInput(""); // Empty the input field
    props.onAddTask(taskInput);
  };

  return (
    <form className="add-task-form" onSubmit={onAddTask}>
      <h3>New Task</h3>
      <div className="input-submit-container">
        <input
          type="text"
          onChange={onChange}
          placeholder="Add a new task..."
          value={taskInput}
        />
        <button className="symbol-button">＋</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
