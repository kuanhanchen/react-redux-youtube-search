import * as actions from "../../../redux/actions";
import { INPUT, OPERATOR, CLEAR } from "../../../redux/constant";

describe("actions", () => {
  it("should create an action to input a value", () => {
    const input = 1;
    const expectedAction = {
      type: INPUT,
      input
    }
    expect(actions.onInput(input)).toEqual(expectedAction);
  });
  it("should create an action to add an operator", () => {
    const operator = "+";
    const expectedAction = {
      type: OPERATOR,
      operator
    }
    expect(actions.onOperate("+")).toEqual(expectedAction);
  });
  it("should create an action to clear all values", () => {
    const expectedAction = {
      type: CLEAR
    }
    expect(actions.onClear()).toEqual(expectedAction);
  });
});
