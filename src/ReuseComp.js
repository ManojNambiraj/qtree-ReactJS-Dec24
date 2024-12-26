import React from 'react'
import NewBtn from "./NewBtn";
import img1 from "./assets/images/img1.jpg";

function ReuseComp() {
  const handleClick = (value) => {
    alert(value);
  };

  return (
    <div className="App">
      <NewBtn btnName={"All"} handleClick={handleClick} btnColor={"red"} />
      <NewBtn btnName={"Music"} handleClick={handleClick} btnColor={"blue"} />
      <NewBtn btnName={"Books"} handleClick={handleClick} btnColor={"green"} />
      <NewBtn btnName={"Cars"} handleClick={handleClick} btnColor={"yellow"} />
      <NewBtn btnName={"Bikes"} handleClick={handleClick} btnColor={"black"} />
      <NewBtn btnName={"Drama"} handleClick={handleClick} btnColor={"red"} />
      <NewBtn btnName={"Videos"} handleClick={handleClick} btnColor={"red"} />
    </div>
  );
}

export default ReuseComp
