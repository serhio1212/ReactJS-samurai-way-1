import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Store from "./redux/state.js";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let reTree = (
  StateJS,
  AddPost,
  AddProfilePost,
  updateText,
  updateProfileText
) => {
  root.render(
    // < React.StrictMode>
    <div>
      <BrowserRouter>
        <App
          StateJS={Store.getState()}
          AddPost={Store.AddPost.bind(Store)}
          AddProfilePost={Store.AddProfilePost.bind(Store)}
          updateText={Store.updateText.bind(Store)}
          updateProfileText={Store.updateProfileText.bind(Store)}
        />
      </BrowserRouter>
    </div>
    // </React.StrictMode>
  );
};

reTree(
  Store.getState(),
  Store.AddPost,
  Store.AddProfilePost,
  Store.updateText,
  Store.updateProfileText
);
Store.subscribe(reTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
