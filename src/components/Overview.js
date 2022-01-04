import TaskItem from "./TaskItem";
import "../style/Overview.css";

const Overview = (props) => {
  return (
    <ul className="overview">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={props.onDeleteTask}
          onResubmit={props.onResubmit}
        />
      ))}
    </ul>
  );
};

export default Overview;
