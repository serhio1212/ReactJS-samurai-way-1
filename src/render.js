import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import StateJS from './redux/state.js';
// import {AddPost} from './redux/state.js';
import {BrowserRouter, Router, Routes, Route, NavLink} from "react-router-dom";
import StateJS from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

export let reTree = (StateJS, AddPost, MessageTextData) => {

    root.render(
        // < React.StrictMode>
        <div>
            <BrowserRouter>
                < App StateJS={StateJS} AddPost={AddPost} MessageTextData={MessageTextData}/>
            </BrowserRouter>
        </div>
        // </React.StrictMode>
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
