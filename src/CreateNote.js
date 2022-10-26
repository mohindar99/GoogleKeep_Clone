import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import "./CreateNote.css";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    let { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandit = () => {
    setExpand(true);
  };

  const btonormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="wrapper">
        <form className="title">
          {expand ? (
            <input
              className="input"
              type="text"
              placeholder="Title"
              name="title"
              value={note.title}
              autoComplete="off"
              onChange={InputEvent}
            />
          ) : null}
          <textarea
            className="input"
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note ....."
            onClick={expandit}
            onDoubleClick={btonormal}
          ></textarea>
          <Button onClick={addEvent}>
            <AddCircleOutlineRoundedIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
