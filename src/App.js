// Libraries
import { useEffect, useState } from "react";
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

  // Retrieve tasks from the local storage; run only once at the start
  useEffect(() => {
    // If storage already exists: set the tasks state to the stored ones
    if (localStorage.length !== 0) {
      setTasks(() => {
        const storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
        return storedTasks;
      });
    }
  }, []);

  /****  Event handlers *****/
  const onDeleteTask = deletingId => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.filter(task => task.id !== deletingId);
      localStorage.setItem("storedTasks", JSON.stringify(newTasks));
      return newTasks; // Only retain tasks that has different id to the deleting one
    });
  };

  // Called when a task is modified
  const onResubmit = ({ modifiedTaskContent, editedId }) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task => {
        if (task.id === editedId) {
          return { ...task, content: modifiedTaskContent }; // copy that task then modify the content
        } else return task;
      });
      localStorage.setItem("storedTasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const onAddTask = taskInput => {
    const newTask = {
      id: uniqid(),
      content: taskInput,
    };
    setTasks(prevTasks => {
      // push the new task to both local storage & the task state
      localStorage.setItem(
        "storedTasks",
        JSON.stringify([...prevTasks, newTask])
      );
      return [...prevTasks, newTask];
    });
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
