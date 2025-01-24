import React, { useContext } from "react";
import { UserContext } from "../ContextAPI";

function Component5() {

    const value = useContext(UserContext);

  return (
    <div>
      <h1>Component5 {value}</h1>
    </div>
  );
}

export default Component5;
