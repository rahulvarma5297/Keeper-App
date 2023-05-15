import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [text, setTitle] = useState({
    title: "",
    content: "",
  });

  const [smallState, setState] = useState({
    rowNum: 1,
    zoomBtn: false,
    displayVal: "none",
  });

  function TextAdder(event) {
    const { name, value } = event.target;

    setTitle((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  }

  function SetLargeState() {
    setState({
      rowNum: 3,
      zoomBtn: true,
      displayVal: "",
    });

    console.log("state");
  }

  function Dummy() {
    console.log("dummy runs");
    return false;
  }

  function ButtonClick(event) {
    event.preventDefault();
    props.titleData(text);

    setTitle({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={ButtonClick} className="create-note">
        <input
          //ref={input => input && input.focus()}
          style={{ display: smallState.displayVal }}
          onChange={TextAdder}
          name="title"
          value={text.title}
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          onClick={!smallState.zoomBtn ? SetLargeState : Dummy}
          onChange={TextAdder}
          name="content"
          placeholder="Take a note..."
          rows={smallState.rowNum}
          value={text.content}
        />
        <Zoom in={smallState.zoomBtn}>
          <Fab title="add note to the app" type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
