import React from 'react'

function InputData({title, document}) {
    return (
      <div className="text_box">
        <div className="text">
          <h1>{title}</h1>
          <p>{document}</p>
        </div>
      </div>
    );
}

export default InputData;
