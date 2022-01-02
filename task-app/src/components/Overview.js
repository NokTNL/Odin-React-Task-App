import TaskItem from "./TaskItem";

const Overview = (props) => {
  return (
    <div className="overview">
      <ul>
        {props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={props.onDeleteTask}
            onResubmit={props.onResubmit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Overview;
