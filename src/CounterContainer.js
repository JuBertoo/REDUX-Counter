import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter:state
  });
  
const mapDispatchToProps = dispatch => ({
    onAdd1: () => dispatch({ type: "ADD" }),
    onRemove1: () => dispatch({ type: "REMOVE" }),
    onAdd10: () => dispatch({ type: "ADD10" }),
    onRemove10: () => dispatch({ type: "REMOVE10" }),
    onReset: () => dispatch({ type: "RESET" })

});

const CounterComponent = ({ counter, onAdd1, onRemove1, onAdd10, onRemove10, onReset  }) => (
    <div>
      <p>{counter}</p>
      <button onClick={onAdd1}>ADD 1</button>
      <button onClick={onRemove1}>REMOVE 1</button>
      <button onClick={onAdd10}>ADD 10</button>
      <button onClick={onRemove10}>REMOVE 10</button>
      <button onClick={onReset}>RESET</button>
    </div>
  );

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterComponent);