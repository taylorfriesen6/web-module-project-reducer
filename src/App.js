import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, {initialState} from './reducers';
import {applyNumber, changeOperation} from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumClick = (e) => {
    dispatch(applyNumber(parseInt(e.target.textContent)));
  }

  const handleOpClick = (e) => {
    dispatch(changeOperation(e.target.textContent));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumClick}/>
              <CalcButton value={2} onClick={handleNumClick}/>
              <CalcButton value={3} onClick={handleNumClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumClick}/>
              <CalcButton value={5} onClick={handleNumClick}/>
              <CalcButton value={6} onClick={handleNumClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumClick}/>
              <CalcButton value={8} onClick={handleNumClick}/>
              <CalcButton value={9} onClick={handleNumClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOpClick}/>
              <CalcButton value={"*"} onClick={handleOpClick}/>
              <CalcButton value={"-"} onClick={handleOpClick}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
