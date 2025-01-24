import React, { useContext } from 'react'
import Compnent4 from './Compnent4'
import { UserContext } from '../ContextAPI'

function Component3() {

    const value = useContext(UserContext)

  return (
    <div>
      <h1>Component3 Page {value}</h1>

      <Compnent4 />
    </div>
  );
}

export default Component3
