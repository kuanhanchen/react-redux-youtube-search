import calculator from "../../../redux/reducers/calculator";
import { INPUT, OPERATOR, CLEAR } from "../../../redux/constant";

describe("tests for calculator reducer", () => {
  let action = {};
  let state = {};
  describe("handle INPUT action", () => {
    it(`should return a new object with updated firstNumber and currentInput
      if the first operation is entering a number`, () => {
      action = {type: INPUT, input: 1};
      expect(calculator(undefined, action).currentInput).toEqual(1);
      expect(calculator(undefined, action).firstNumber).toEqual(1);
    });
    it(`should return a new object with updated firstNumber and currentInput
      if keeping entering the first number`, () => {
      action = {type: INPUT, input: 2};
      state = {
        currentInput: 1,
        firstNumber: 1,
        secondNumber: null,
        operator: null
      };
      expect(calculator(state, action).currentInput).toEqual(12);
      expect(calculator(state, action).firstNumber).toEqual(12);
    });
    it(`should return a new object with updated secondNumber and currentInput
      if starting entering the second number`, () => {
      action = {type: INPUT, input: 3};
      state = {
        currentInput: 1,
        firstNumber: 1,
        secondNumber: null,
        operator: "+"
      };
      expect(calculator(state, action).currentInput).toEqual(3);
      expect(calculator(state, action).secondNumber).toEqual(3);
    });
    it(`should return a new object with updated secondNumber and currentInput
      if keeping entering the second number`, () => {
      action = {type: INPUT, input: 2};
      state = {
        currentInput: 1,
        firstNumber: 1,
        secondNumber: 1,
        operator: "+"
      };
      expect(calculator(state, action).currentInput).toEqual(12);
      expect(calculator(state, action).secondNumber).toEqual(12);
    });
  });
  describe("handle OPERATOR action", () => {
    it(`should return a new object with an operator
      if there's no operator in state`, () => {
      action = {type: OPERATOR, operator: "+"};
      expect(calculator(undefined, action).operator).toEqual("+");
    });
    it(`should return a new object with an updated operator and calculation
      if there's an operator in state`, () => {
      action = {type: OPERATOR, operator: "-"};
      state = {
        currentInput: 2,
        firstNumber: 1,
        secondNumber: 2,
        operator: "+"
      }
      expect(calculator(state, action).operator).toEqual("-");
      expect(calculator(state, action).currentInput).toEqual(3);
    });
  });
  describe("handle CLEAR action", () => {
    it(`should return the initial state`, () => {
      action = {type: CLEAR};
      const initialState = {
        currentInput: null,
        firstNumber: null,
        secondNumber: null,
        operator: null
      };
      expect(calculator(undefined, action)).toEqual(initialState);
    });
  });
});
