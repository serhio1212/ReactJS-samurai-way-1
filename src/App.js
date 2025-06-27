import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Common from "./components/common/common.jsx";
import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import DialogsMessage from "./components/Dialogs/DialogsMessage/DialogsMessage.jsx";
import "./App.css";

function App(props) {
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

            <Route path="Profile" element={<Profile />}>
              <Route index element={<h3>TASK</h3>} />
              <Route path="Messages" element={<MyPostsContainer />} />
            </Route>

            <Route path="DialogsContainer" element={<DialogsContainer />} />

            {MessagePage.DialogsData.map((k, idAcc) => (
              <Route
                key={k.id}
                exact
                path={`/DialogsMessage/:id/:idAcc`}
                element={<DialogsMessage MessagePage={MessagePage} />}
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
