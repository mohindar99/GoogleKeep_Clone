import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Note.css";

const Note = (props) => {
  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  return (
    <div className="wrapper1">
      <div>
        <h1 className="maintitle">{props.title}</h1>
        <h5 className="content">{props.content}</h5>
        <button className="btn" onClick={deleteItem}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
};

export default Note;
