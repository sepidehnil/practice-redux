///////////////////////////////////////////////////1
// import { UseSelector, useSelector, useDispatch, connect } from "react-redux";
// import classes from "./Counter.module.css";
// import { Component } from "react";
// import { counterActions } from "../store";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter); //when we use useselector redux automaticlly sets a subscription to the component
//   const showCounter = useSelector((state) => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({ type: "increment" }); //or using redux toolkit dispatch(counterActions.increment());
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" }); //dispatch(counterActions.decrement())
//   };
//   const increaseHandler = () => {
//     dispatch({ type: "increase", amount: 5 }); //dispatch(counterActions.increase(10)) //{typr:identifier , payload :5}
//   };
//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" }); //dispatch(counterActions.toggle())
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCounter && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>increment</button>
//         <button onClick={decrementHandler}>decrement</button>
//         <button onClick={increaseHandler}>increase by 5</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };
// export default Counter;

//////////////////////////////class based component

// class Counter extends Component {
//   /////////hooks are not usbale in class based components so we cant use useSelector ... so we used connect to connect class based components to redux
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//       </main>
//     );
//   }
// }
// const mapToStateProps = (state) => {
//   return { counter: state.counter };
// };
// const mapToDispatchProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapToStateProps, mapToDispatchProps)(Counter);

////////////////////////////////////////////2
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //when we use useselector redux automaticlly sets a subscription to the component
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //{type:identifier , payload :5}
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
