export const dispatchDeposite = (amount) => {
    return (dispatch) => {
        dispatch({
          type: "deposite",
          payload: amount,
        });
    }
}

export const dispatchWithdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};