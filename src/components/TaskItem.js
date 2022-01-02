import { useState } from "react";
import ResubmitForm from "./ResubmitForm";

const TaskItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onDeleteTask = () => {
    props.onDeleteTask(props.task.id);
  };

  const onEditTask = () => {
    setIsEditing(true);
  };

  const onResubmit = (modifiedTaskContent) => {
    props.onResubmit({ modifiedTaskContent, editedId: props.task.id });
    setIsEditing(false);
  };

  return isEditing ? (
    <ResubmitForm initialContent={props.task.content} onResubmit={onResubmit} />
  ) : (
    <li>
      {props.task.content}
      <button onClick={onEditTask}>Edit task</button>
      <button onClick={onDeleteTask}>Delete task</button>
    </li>
  );
};

export default TaskItem;
