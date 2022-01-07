import TaskItem from "./TaskItem";
import "../style/Overview.css";

/***** Overview of task items ******/
export default function Overview(props) {
  return (
    <ul className="overview">
      {/* List of TaskItem's : */}
      {props.tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={props.onDeleteTask} // Pass onDeleteTask function downwards from App
          onResubmit={props.onResubmit} // Pass onResubmit function downwards from App
        />
      ))}
    </ul>
  );
}
