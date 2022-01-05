import { useState } from "react";

const ResubmitForm = (props) => {
  const [modifiedTaskContent, setModifiedTaskContent] = useState(
    props.initialContent
  );

  const onChangeContent = (event) => {
    setModifiedTaskContent(event.target.value);
  };

  const onResubmit = (event) => {
    event.preventDefault();
    props.onResubmit(modifiedTaskContent);
  };

  return (
    <form className="resubmit-form" onSubmit={onResubmit}>
      <input
        type="text"
        defaultValue={props.initialContent}
        onChange={onChangeContent}
      />
      <button className="symbol-button">✓</button>
    </form>
  );
};

export default ResubmitForm;
