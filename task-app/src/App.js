import { useState } from "react";
import uniqid from "uniqid";
import AddTaskForm from "./components/AddTaskForm";
import Overview from "./components/Overview";

const TEMPLATE_TASKS = [
  { id: "1", content: "Sleep by 10pm" },
  { id: "2", content: "Make dinner" },
];

function App() {
  const [tasks, setTasks] = useState(TEMPLATE_TASKS);

  const onDeleteTask = (deletingId) => {
    setTasks((prevTasks) => {
      const spliceIndex = prevTasks.findIndex((task) => task.id === deletingId);
      const newTasks = [...prevTasks];
      newTasks.splice(spliceIndex, 1);
      return newTasks;
    });
  };

  const onResubmit = ({ modifiedTaskContent, editedId }) => {
    setTasks((prevTasks) => {
      const editedIndex = prevTasks.findIndex((task) => task.id === editedId);
      const newTasks = [...prevTasks];
      newTasks[editedIndex].content = modifiedTaskContent;
      console.log(newTasks);
      return newTasks;
    });
  };

  const onAddTask = (taskInput) => {
    const newTask = {
      id: uniqid(),
      content: taskInput,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <AddTaskForm onAddTask={onAddTask} />
      <Overview
        onDeleteTask={onDeleteTask}
        onResubmit={onResubmit}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
