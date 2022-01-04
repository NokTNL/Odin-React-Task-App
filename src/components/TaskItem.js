import { useState } from "react";
import ResubmitForm from "./ResubmitForm";
import "../style/TaskItem.css";

export default function TaskItem(props) {
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
    <li className="task-item">
      <ResubmitForm
        initialContent={props.task.content}
        onResubmit={onResubmit}
      />
    </li>
  ) : (
    <li className="task-item" onClick={onEditTask}>
      <p>{props.task.content || "(Empty)"}</p>
      <button onClick={onDeleteTask}>－</button>
    </li>
  );
}
