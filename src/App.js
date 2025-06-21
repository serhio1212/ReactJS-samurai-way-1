import React from "react";
import { Routes, Route } from "react-router-dom";
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
import { useSelector } from "react-redux";

function App() {
  // debugger;
  const Sidebar = useSelector((store) => store.sidebar);
  const ProfilePage = useSelector((store) => store.ProfilePage);
  const MessagePage = useSelector((store) => store.MessagePage);
  return (
    <div className="app-flex">
      <div className="app-wrapper">
        <Header />
        <Navbar ffriends={Sidebar.perusers} />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Common />} />
            <Route
              path="Profile"
              element={
                <Profile
                  // PostsData={Store.ProfilePage.PostsData}
                  ProfilePage={ProfilePage}
                />
              }
            >
              <Route index element={<h3>TASK</h3>} />
              <Route
                path="Messages"
                element={
                  <MyPosts
                    // MessageProfile={Store.ProfilePage.MessageProfile}
                    ProfilePage={ProfilePage}
                  />
                }
              />
            </Route>

            <Route
              path="Dialogs"
              element={
                <Dialogs
                  MessagesData={MessagePage.MessagesData}
                  DialogsData={MessagePage.DialogsData}
                  // MessageProfile={Store.ProfilePage.MessageProfile}
                />
              }
            />

            {MessagePage.DialogsData.map((k) => (
              <Route
                key={k.id}
                exact
                path={`/Dialogs/${k.id}`}
                element={
                  <DialogsMessage
                    id={k.id}
                    idAcc={k.idAcc}
                    MessagesData={MessagePage.MessagesData}
                    MessageText={MessagePage.MessageText}
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
