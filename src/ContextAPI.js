import { createContext } from "react";
import Comonent1 from "./Components/Comonent1";

export const UserContext = createContext();

function ContextAPI() {
  const userName = "Sheela";

  return (
    <UserContext.Provider value={userName}>
      <h3>It's a Home page {userName}</h3>

      <Comonent1 />
    </UserContext.Provider>
  );
}

export default ContextAPI;
