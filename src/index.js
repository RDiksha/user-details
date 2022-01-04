import { StrictMode } from "react";
import ReactDOM from "react-dom";
import UserReducer from "./UserReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

const store = createStore(UserReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
