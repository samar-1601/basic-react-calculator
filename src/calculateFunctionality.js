import { ACTIONS } from "./App";

function Calculate(prev, curr) {
  let operand1 = Number(prev.slice(0, -1));
  let operand2 = Number(curr);
  let operator = prev.slice(-1);

  switch (operator) {
    case "*":
      return `${operand1 * operand2}`;
    case "/":
      return `${operand1 / operand2}`;
    case "-":
      return `${operand1 - operand2}`;
    case "+":
      return `${operand1 + operand2}`;
    default:
      return `${operand1 + operand2}`;
  }
}

export function calculator(state, { type, payload }) {
  let curr = state.currentOperand,
    prev = state.previousOperand;

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && curr === "0") return state;
      if (payload.digit === "." && curr.includes(".")) return state;
      return {
        ...state,
        currentOperand: `${curr || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (!curr) {
        if (!prev) return {};
        if (prev) return state;
      }
      if (prev && curr) {
        return {
          ...state,
          previousOperand: `${Calculate(prev, curr)}${payload.operand}`,
          currentOperand: "",
        };
      }
      return {
        ...state,
        currentOperand: "",
        previousOperand: `${curr || ""}${payload.operand}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (!curr) {
        if (prev) {
          prev = prev.slice(0, -1);
        }
      } else {
        curr = curr.slice(0, -1);
      }
      return {
        ...state,
        currentOperand: curr,
        previousOperand: prev,
      };

    case ACTIONS.EVALUATE:
      if (!curr || !prev) return state;
      const result = Calculate(prev, curr);
      return {
        ...state,
        previousOperand: "",
        currentOperand: result,
      };

    default:
      return state;
  }
}
