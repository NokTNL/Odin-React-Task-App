import { useState } from "react";
import "../style/TaskItem.css";
import deleteTaskSvg from "../img/delete-task.svg";
import submitChangeSvg from "../img/submit-change.svg";

export default function TaskItem(props) {
  /******** Store whether the task is being edited now ********/
  const [isEditing, setIsEditing] = useState(false);
  /********* When the task is being edited, store the input content ****/
  const [modifiedTaskContent, setModifiedTaskContent] = useState(
    props.task.content
  );

  /**** Task edit handling ****/
  // Enables task editing
  const onEditTask = () => {
    setIsEditing(true);
  };

  // When editing, change modifiedTaskContent whenever input is typed
  const onChangeContent = event => {
    setModifiedTaskContent(event.target.value);
  };

  // Submit task change when editing is done
  const onResubmit = event => {
    event.preventDefault();
    setIsEditing(false);
    props.onResubmit({ modifiedTaskContent, editedId: props.task.id }); // Pass deletion to App
  };

  /**** Task deletion handling ****/
  const onDeleteTask = () => {
    props.onDeleteTask(props.task.id); // Pass deletion to App
  };

  return isEditing ? (
    // If editing is enabled, shows a form for resubmission
    <li className="task-item">
      <form className="resubmit-form" onSubmit={onResubmit}>
        <input
          type="text"
          defaultValue={props.task.content}
          onChange={onChangeContent}
        />
        <button className="symbol-button">
          <img src={submitChangeSvg} alt="Submit change" />
        </button>
      </form>
    </li>
  ) : (
    // Else, shows the task content
    <li className="task-item" onClick={onEditTask}>
      <p>{props.task.content || "Nothing"}</p>
      <button className="symbol-button" onClick={onDeleteTask}>
        <img src={deleteTaskSvg} alt="Delete task" />
      </button>
    </li>
  );
}
