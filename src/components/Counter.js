import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler} className="counter-button">
        Increment
      </button>
      <button onClick={increaseHandler} className="counter-button">
        Increase by 5
      </button>
      <button onClick={decrementHandler} className="counter-button">
        Decrement
      </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button
//           onClick={this.incrementHandler.bind(this)}
//           className="counter-button"
//         >
//           Increment
//         </button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         <button
//           onClick={this.decrementHandler.bind(this)}
//           className="counter-button"
//         >
//           Decrement
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDisptachToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),

//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDisptachToProps)(Counter);
