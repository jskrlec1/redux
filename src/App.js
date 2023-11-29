import React from 'react';
import { connect } from 'react-redux';
import { addToCount, subtractFromCount, setCount } from './redux';
import './App.css';

function App({ count, addOne, subtractOne, reset }) {
  return (
    <div className="app">
      <p>
        <span>
          <button onClick={subtractOne}> - </button>
          <span className="counter"> Broj: {count} </span>
          <button onClick={addOne}> + </button>
        </span>
      </p>
      <p>
        <button onClick={reset}>Resetiraj broj</button>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state,
  };
}

const mapDispatchToProps = {
  addOne: () => addToCount(1),
  subtractOne: () => subtractFromCount(1),
  reset: () => setCount(0),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);