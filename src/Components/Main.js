import React from "react";
import InputData from "./InputData";

function Main() {
  const AddEvent = () => {
      return (
        <InputData title={'1st'} document={'Ok'} />
    );
  };
  return (
    <div className="text_box">
      <div className="text" onClick={AddEvent}>
        <p>Writes on a Note ...</p>
      </div>
    </div>
  );
}

export default Main;
