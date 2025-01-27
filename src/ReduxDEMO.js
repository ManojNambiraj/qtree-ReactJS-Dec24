import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { accountAction } from "./state/actionCreators";

function ReduxDEMO() {
  const [amount, setAmount] = useState(0);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { dispatchDeposite, dispatchWithdraw } = bindActionCreators(
    accountAction,
    dispatch
  );

  return (
    <div>
      <h1>{account}</h1>

      <input
        type="number"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={() => dispatchDeposite(parseInt(amount))}>
        Deposite
      </button>
      <button onClick={() => dispatchWithdraw(parseInt(amount))}>
        Withdraw
      </button>
    </div>
  );
}

export default ReduxDEMO;
