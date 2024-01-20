import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import MyPosts from './components/Profile/MyPosts/MyPosts.jsx'
import News from './components/News/News.jsx'
import Music from './components/Music/Music.jsx'
import Settings from './components/Settings/Settings.jsx'
import {BrowserRouter, Router, Routes, Route, NavLink, Outlet} from "react-router-dom";
import Common from "./components/common/common.jsx";
import DialogsMessage from "./components/Dialogs/DialogsMessage/DialogsMessage";

function App({StateJS, AddPost, MessageTextData, updateText}) {
    return (
        <div className='app-flex'>
            <div className='app-wrapper'>
                <Header/>
                <Navbar ffriends={StateJS.sidebar.perusers} />

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/' element={<Common/>}/>
                        <Route exact path='/Profile' element={<Profile PostsData={StateJS.ProfilePage.PostsData}/>}/>
                        <Route exact path='/Dialogs' element={<Dialogs MessagesData={StateJS.MessagePage.MessagesData} DialogsData={StateJS.MessagePage.DialogsData}/>} />
                        <Route exact path='/Messages' element={<MyPosts/>}/>
                        {StateJS.MessagePage.DialogsData.map(k => <Route key={k.id} exact path={`/Dialogs/${k.id}`} element={<DialogsMessage id={k.id} idAcc={k.idAcc} MessagesData={StateJS.MessagePage.MessagesData} AddPost={AddPost} MessageTextData={MessageTextData} updateText={updateText}/>}/>)}
                        <Route exact path='/News' element={<News/>}/>
                        <Route exact path='/Music' element={<Music/>}/>
                        <Route exact path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </div>
    )
}

export default App;
