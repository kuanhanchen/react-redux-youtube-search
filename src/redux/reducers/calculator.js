import { OPERATOR, INPUT, CLEAR } from "../constant";

const initialState = {
  currentInput: null,
  firstNumber: null,
  secondNumber: null,
  operator: null
};

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    // case "*":
    //   return firstNum * secondNum;
    // case "/":
    //   return firstNum / secondNum;
    default:
      return firstNum;
  }
}

const handleOperator = (state, action) => {
  if (state.operator) {
    const newValue = calculate(state.operator, state.firstNumber, state.secondNumber);
    return {
      ...state,
      operator: action.operator,
      currentInput: newValue,
      firstNumber: newValue,
      secondNumber: null
    };
  }
  return {
    ...state,
    operator: action.operator
  };
}

const handleInput = (state, action) => {
  // in the initial case, entering firstNumber
  if (state === initialState) {
    return {
      ...state,
      firstNumber: action.input,
      currentInput: action.input
    }
  }
  // continue entering firstNumber
  else if(state.secondNumber === null && state.operator === null) {
    return {
      ...state,
      firstNumber: state.currentInput * 10 + action.input,
      currentInput: state.currentInput * 10 + action.input
    }
  }

  // '=' has pressed, if pressing number then, restart the process
  else if(state.firstNumber !== null && state.operator === '=' && state.secondNumber == null) {
    return {
      ...state,
      firstNumber: action.input,
      currentInput: action.input,
      operator: null
    }
  }
  // have firstNumber and operator in the state , start entering secondNumber
  else if(state.firstNumber !== null && state.operator !== null && state.secondNumber === null) {
    return {
      ...state,
      secondNumber: action.input,
      currentInput: action.input
    }
  }
  // have firstNumber and operator in the state, keep entering secondNumber
  else if(state.firstNumber !== null && state.operator !== null && state.secondNumber !== null) {
    return {
      ...state,
      secondNumber: state.currentInput * 10 + action.input,
      currentInput: state.currentInput * 10 + action.input
    }
  };
}

const Calculator = (state = initialState, action) => {
  switch (action.type) {
    case OPERATOR:
      return handleOperator(state, action);
    case INPUT:
      return handleInput(state, action);
    case CLEAR:
      return {...initialState};
    default:
      return state;
  }
};

export default Calculator;
