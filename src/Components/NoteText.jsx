import React from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function NoteText(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <div>
      <div className="note_area">
        <h3>{props.title}</h3>
        <p>{props.note}</p>
        <Button className="btn" onClick={deleteNote}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}

export default NoteText
