import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

// AXIOS GLOBAL DEFAULTS
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);
