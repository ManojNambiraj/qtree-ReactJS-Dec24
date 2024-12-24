import React from "react";
// import "./NewBtn.css"

function NewBtn(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.handleClick(props.btnName);
        }}
        // className="demo"

        style={{backgroundColor: props.btnColor, borderColor: "blue"}}
      >
        {props.btnName}
      </button>

      
    </div>
  );
}

export default NewBtn;
