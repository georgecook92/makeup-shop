import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../indexReducer";

// Logging
import thunk from "redux-thunk";
import promise from "redux-promise";
import createLogger from "redux-logger";

const initialState = {};

const logger = createLogger({
  collapsed: () => true // Collapse all events by default
});

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, promise, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
