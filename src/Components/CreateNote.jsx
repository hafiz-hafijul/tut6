import React, {useState} from 'react'
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    notes: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const Submits = (e) => {
    e.preventDefault();
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      notes: "",
    });
  };
  return (
    <div className="text_create">
      <div className="text_center">
        <form onSubmit={Submits}>
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            onChange={InputEvent}
            value={note.title}
            name="title"
          />
          <textarea
            rows=""
            column=""
            placeholder="Writes on a Note ..."
            value={note.notes}
            onChange={InputEvent}
            name="notes"
          />
          <Button className="hafiz" type="submit" onClick={addEvent}>
            <AddIcon />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote
