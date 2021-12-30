import React from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function NoteText() {
    return (
      <div>
        <div className="note_area">
          <h3>Hello</h3>
          <p>
            Millions around the world braced Thursday for drastically curtailed
          </p>
          <Button className="btn">
            <DeleteIcon />
          </Button>
        </div>
      </div>
    );
}

export default NoteText
