import React from "react";
import NoteText from "./NoteText";

function Note(props) {
  
  const onDelete = (id) => {
    props.upData.filter((val, ind) => {
      return ind !== id;
    });
  };

  return (
    <div className="main_note">
      {props.sentdata.map((item, index) => {
        return (
          <NoteText
            key={index}
            id={index}
            title={item.title}
            note={item.notes}
            deleteItem={onDelete}
          />
        );
      })}
    </div>
  );
}

export default Note;
