import { useState } from "react";
import uniqid from "uniqid";
import AddTaskForm from "./components/AddTaskForm";
import Overview from "./components/Overview";
import "./style/App.css";

const TEMPLATE_TASKS = [
  { id: "1", content: "Sleep by 10pm" },
  { id: "2", content: "Make dinner" },
];

function App() {
  const [tasks, setTasks] = useState(TEMPLATE_TASKS);
  console.log(tasks);

  const onDeleteTask = (deletingId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== deletingId));
    /* Alternative: using splice() (Usually not preferred) 
      const spliceIndex = prevTasks.findIndex((task) => task.id === deletingId);
      const newTasks = [...prevTasks];
      newTasks.splice(spliceIndex, 1);
      return newTasks; 
    }); */
  };

  const onResubmit = ({ modifiedTaskContent, editedId }) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === editedId)
          return { ...task, content: modifiedTaskContent };
        else return task;
      });
      // This one should NOT be used, although it works. (...) only does shallow copy.
      /* const editedIndex = prevTasks.findIndex((task) => task.id === editedId);
      const newTasks = [...prevTasks];
      newTasks[editedIndex].content = modifiedTaskContent; // This is mutating the object inside the state variable
      return newTasks; */
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
      <h1>My To-do List</h1>
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
