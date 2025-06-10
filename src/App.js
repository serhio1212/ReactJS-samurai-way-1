import React from "react";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import MyPosts from "./components/Profile/MyPosts/MyPosts.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Common from "./components/common/common.jsx";
import DialogsMessage from "./components/Dialogs/DialogsMessage/DialogsMessage.jsx";
import "./App.css";


function App({ StateJS, AddPost, AddProfilePost, updateText, updateProfileText }) {
  return (
    <div className="app-flex">
      <div className="app-wrapper">
        <Header />
        <Navbar ffriends={StateJS.sidebar.perusers} />
      
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Common />} />
            <Route
              path="Profile"
              element={
                <Profile
                  AddProfilePost={AddProfilePost}
                  updateProfileText={updateProfileText}
                  PostsData={StateJS.ProfilePage.PostsData}
                  MessageProfile={StateJS.MessageProfile}
                />
              }
            >
              <Route index element={<h3>TASK</h3>} />
              <Route
                path="Messages"
                element={
                  <MyPosts
                    AddProfilePost={AddProfilePost}
                    MessageProfile={StateJS.MessageProfile}
                    updateProfileText={updateProfileText}
                    PostsData={StateJS.ProfilePage.PostsData}
                  />
                }
              />
            </Route>
            <Route
              path="Dialogs"
              element={
                <Dialogs
                  MessagesData={StateJS.MessagePage.MessagesData}
                  DialogsData={StateJS.MessagePage.DialogsData}
                  AddProfilePost={AddProfilePost}
                  MessageProfile={StateJS.MessageProfile}
                  updateText={updateText}
                />
              }
            />
            {StateJS.MessagePage.DialogsData.map((k) => (
              <Route
                key={k.id}
                exact
                path={`/Dialogs/${k.id}`}
                element={
                  <DialogsMessage
                    id={k.id}
                    idAcc={k.idAcc}
                    MessagesData={StateJS.MessagePage.MessagesData}
                    AddPost={AddPost}
                    MessageText={StateJS.MessageText}
                    updateText={updateText}
                  />
                }
              />
            ))}
            <Route path="News" element={<News />} />
            <Route path="Music" element={<Music />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="*" element={<p>I don`t have this link!</p>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
