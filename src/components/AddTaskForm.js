import { useState } from "react";
import "../style/AddTaskForm.css";
import addTaskSvg from "../img/add-task.svg";

/********* A form to add a single task at a time ***********/
export default function AddTaskForm(props) {
  /*********** Store local task input as state **********/
  const [taskInput, setTaskInput] = useState("");

  const onChange = event => {
    setTaskInput(event.target.value);
  };

  const onAddTask = event => {
    event.preventDefault(); // Prevent the form from reloading
    setTaskInput(""); // Empty the input field after adding a task
    props.onAddTask(taskInput); // pass upwards to App
  };

  return (
    <form className="add-task-form" onSubmit={onAddTask}>
      <h3>New Task</h3>
      <div className="input-submit-container">
        <input
          type="text"
          onChange={onChange}
          placeholder="Add it here..."
          value={taskInput}
        />
        <button className="symbol-button">
          <img src={addTaskSvg} alt="Add task" />
        </button>
      </div>
    </form>
  );
}
