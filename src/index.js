import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateJS, { subscribe } from './redux/state.js';
import {AddPost} from './redux/state.js';
import {AddProPost} from './redux/state.js';
import {updateText} from './redux/state.js';
import {updateProText} from './redux/state.js';
import {BrowserRouter, Router, Routes, Route, NavLink} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reTree = (StateJS, AddPost, AddProPost, updateText, updateProText) => {

    root.render(
        // < React.StrictMode>
        <div>
            <BrowserRouter>
                < App StateJS={StateJS} AddPost={AddPost} AddProPost={AddProPost} updateText={updateText} updateProText={updateProText}/>
            </BrowserRouter>
        </div>
        // </React.StrictMode>
    );

}

reTree(StateJS, AddPost, AddProPost, updateText, updateProText);
subscribe(reTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
