import { applyMiddleware, createStore } from "redux";

const reducer = (initialState = 0, action) => {
  console.log(initialState);
  switch (action.type) {
    case "INC":
      return initialState + 1;
    case "DEC":
      return initialState - 1;
    case "E":
      throw new Error("AAAAA");
    default:
      return initialState;
  }
};

const logger = store => next => action => {
  next(action);
  console.log("action fired ", action);
};

const error = store => next => action => {
  try {
    next(action);
    console.log("next action", action);
  } catch (e) {
    console.log("AHHHHHHHH!", e);
  }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => console.log("store changed", store.getState()));

store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "E" });
