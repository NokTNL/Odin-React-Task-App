import { useState } from "react";

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
    <form onSubmit={onAddTask}>
      <input type="text" onChange={onChange} value={taskInput} />
      <button>Add task!</button>
    </form>
  );
};

export default AddTaskForm;
