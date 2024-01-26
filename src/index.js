import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import StateJS from './redux/state.js';
import {AddPost} from './redux/state.js';
import {AddProPost} from './redux/state.js';
import {updateText} from './redux/state.js';
import {updateProText} from './redux/state.js';
import {BrowserRouter, Router, Routes, Route, NavLink} from "react-router-dom";
import { reTree } from "./render";


reTree(StateJS, AddPost, AddProPost, updateText, updateProText);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
