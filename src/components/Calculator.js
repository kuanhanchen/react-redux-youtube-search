import React from "react";
import { connect } from 'react-redux';
import { onInput, onOperate, onClear } from '../redux/actions';

const Calculator = ({calculator: { currentInput }, onOperate, onInput, onClear }) => {
  const handleInputChange = e => {
    onInput(parseFloat(e.target.value, 10));
  };
  const handleOperator = e => {
    onOperate(e.target.value);
  }
  return (
  <div className="calculator">
    <div className="calculator-output">    
      <span className="result" data-testid="result">{currentInput ? currentInput : 0}</span>
    </div>
    <div>        
      <button value="AC" onClick={onClear} className="item upper-panel">AC</button>
      <button value="sign" onClick={() => {}} className="item upper-panel">+/-</button>
      <button value="%" onClick={() => {}} className="item upper-panel">%</button>
      <button value="/" onClick={() => {}} className="item operator">÷</button>
    </div>
    <div>
      <button value={7} onClick={handleInputChange} className="item number">7</button>
      <button value={8} onClick={handleInputChange} className="item number">8</button>
      <button value={9} onClick={handleInputChange} className="item number">9</button>
      <button value="*" onClick={() => {}} className="item operator">×</button>
    </div>
    <div>
      <button value={4} onClick={handleInputChange} className="item number">4</button>
      <button value={5} onClick={handleInputChange} className="item number">5</button>
      <button value={6} onClick={handleInputChange} className="item number">6</button>
      <button value="-" onClick={handleOperator} className="item operator">-</button>
    </div>
    <div>        
      <button value={1} onClick={handleInputChange} className="item number">1</button>
      <button value={2} onClick={handleInputChange} className="item number">2</button>
      <button value={3} onClick={handleInputChange} className="item number">3</button>
      <button value="+" onClick={handleOperator} className="item operator">+</button>
    </div>
    <div>
      <button value={0} onClick={handleInputChange} className="number zero-btn">0</button>
      <button value="." onClick={() => {}} className="item number">.</button>
      <button value="=" onClick={handleOperator} className="item operator">=</button>
    </div>
  </div>
)};

const mapStateToProps = state => {
  return {
    calculator: state.calculator
  };
};

export default connect(mapStateToProps, { onInput, onOperate, onClear })(Calculator);
