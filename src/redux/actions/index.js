import { INPUT, OPERATOR, CLEAR } from "../constant";

export const onInput = (input) => ({
  type: INPUT,
  input
});

export const onOperate = (operator) => ({
  type: OPERATOR,
  operator,
});

export const onClear = () => ({
  type: CLEAR
});
