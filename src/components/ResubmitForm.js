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
    <form onSubmit={onResubmit}>
      <input
        type="text"
        defaultValue={props.initialContent}
        onChange={onChangeContent}
      />
      <button>✓</button>
    </form>
  );
};

export default ResubmitForm;
