import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/redux-store.js";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let reTree = () => {
  root.render(
    // < React.StrictMode>
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </div>

    // </React.StrictMode>
  );
};

reTree();
Store.subscribe(reTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
