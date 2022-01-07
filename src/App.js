// Libraries
import { useState } from "react";
import uniqid from "uniqid";
// Components
import AddTaskForm from "./components/AddTaskForm";
import Overview from "./components/Overview";
// Styling
import "./style/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Template tasks, for testing text overflow
const TEMPLATE_TASKS = [
  { id: "1", content: "Sleep by 10pm while finishing all my coding work" },
  { id: "2", content: "Learn how to say 'Supercalifragilisticexpialidocious'" },
];

export default function App() {
  /***   Tasks state: stores the whole list of task ***/
  const [tasks, setTasks] = useState(TEMPLATE_TASKS);
  console.log(tasks);

  /****  Event handlers *****/
  const onDeleteTask = deletingId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== deletingId)); // Only retain tasks that has different id to the deleting one
  };

  // Called when a task is modified
  const onResubmit = ({ modifiedTaskContent, editedId }) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task => {
        if (task.id === editedId) {
          return { ...task, content: modifiedTaskContent }; // copy that task then modify the content
        } else return task;
      });
      return newTasks;
    });
  };

  const onAddTask = taskInput => {
    const newTask = {
      id: uniqid(),
      content: taskInput,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h1>My To-do List :</h1>
      <AddTaskForm onAddTask={onAddTask} />
      <Overview
        onDeleteTask={onDeleteTask}
        onResubmit={onResubmit}
        tasks={tasks}
      />
      <footer>
        <a
          href="https://github.com/NokTNL/Odin-React-Task-App"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <span>© 2021 by Tsz Nok Lam</span>
      </footer>
    </div>
  );
}
