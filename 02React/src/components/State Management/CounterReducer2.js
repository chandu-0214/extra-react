import React, { useReducer } from "react";

const intialState = {
  count1: 0,
  count2: 10,
};
const countReducer = (state, action) => {
  // is used to update my  COMPLETE state
  console.log(state, action);
  switch (action.type) {
    case "INC_1":
      return {
        count1: state.count1 + action.payload,
        count2: state.count2,
      };
    case "DEC_1":
      return {
        count1: state.count1 - action.payload,
        count2: state.count2,
      };
    case "INC_2":
      return {
        count1: state.count1,
        count2: state.count2 + action.payload,
      };
    case "DEC_2":
      return {
        count1: state.count1,
        count2: state.count2 - action.payload,
      };
    case "RES_1":
      return {
        count1: 0,
        count2: state.count2,
      };
    case "RES_2":
      return {
        count1: state.count1,
        count2: 0,
      };
    default:
      return state;
  }
};
const CounterReducerTwo = () => {
  const [state, dispatch] = useReducer(countReducer, intialState);
  const handleInc1 = () => {
    dispatch({
      type: "INC_1",
      payload: 1,
    });
  };
  const handleDec1 = () => {
    dispatch({
      type: "DEC_1",
      payload: 2,
    });
  };
  const handleReset1 = () => {
    dispatch({
      type: "RES_1",
      payload: 0,
    });
  };
  const handleInc2 = () => {
    dispatch({
      type: "INC_2",
      payload: 2,
    });
  };
  const handleDec2 = () => {
    dispatch({
      type: "DEC_2",
      payload: 2,
    });
  };
  const handleReset2 = () => {
    dispatch({
      type: "RES_2",
      payload: 0,
    });
  };

  console.log(state);

  return (
    <div>
      <h2>Counter Reducer part 2</h2>

      <div>
        <h1>Counter-1 = {state.count1}</h1>
        <button onClick={handleInc1}>Inc</button>
        <button onClick={handleDec1}>Dec</button>
        <button onClick={handleReset1}>Reset</button>
      </div>
      <div>
        <h1>Counter-2 = {state.count2}</h1>
        <button onClick={handleInc2}>Inc</button>
        <button onClick={handleDec2}>Dec</button>
        <button onClick={handleReset2}>Reset</button>
      </div>
    </div>
  );
};

export default CounterReducerTwo;
