import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import StateJS, {
  AddPost,
  AddProfilePost,
  updateText,
  updateProfileText,
  subscribe,
} from "./redux/state.js";
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
          StateJS={StateJS}
          AddPost={AddPost}
          AddProfilePost={AddProfilePost}
          updateText={updateText}
          updateProfileText={updateProfileText}
        />
      </BrowserRouter>
    </div>
    // </React.StrictMode>
  );
};

reTree(StateJS, AddPost, AddProfilePost, updateText, updateProfileText);
subscribe(reTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
