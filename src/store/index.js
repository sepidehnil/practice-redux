//////////////////////////////////////////////1
// import { createStore } from "redux";

// const initialValue = { counter: 0, showCounter: true };

// const counterReducer = (state = initialValue, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state; //// reducer function recieve two pieces input :old state and dispached action and always return new state object
// };

// const store = createStore(counterReducer);

// export default store;

////////////////////////////2 using redux toolkit
//a slice of global state
import { configureStore } from "@reduxjs/toolkit";
import { counterreducer } from "./counter";
import { authreducer } from "./auth";

const store = configureStore({
  reducer: { counter: counterreducer, authentication: authreducer },
  //if we have multiple slices: reducer :{counter : counterSlice.reducer} and configureStore will merge all reducers in one reducer
});

export default store;
