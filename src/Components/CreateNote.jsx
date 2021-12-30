import React from 'react'
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNote() {
  return (
    <div className="text_create">
      <div className='text_center'>
        <form>
          <input type="text" placeholder="Title" autoComplete='off' />
          <textarea
            rows=""
            column=""
            placeholder="Writes on a Note ..."
          />
          <Button className='hafiz' type='submit'>
            <AddIcon />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote
