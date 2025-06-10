import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends.jsx";
import cs_style from "./Navbar.module.css";

function Navbar(props) {
  return (
    <nav className={cs_style.nav}>
      <NavLink
        to="/"
        className={(NavData) =>
          NavData.isActive ? cs_style.active : cs_style.items
        }
      >
        Home
      </NavLink>

      <NavLink
        to="Profile/Messages"
        className={(NavData) =>
          NavData.isActive ? cs_style.active : cs_style.items
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="Dialogs"
        className={(NavData) =>
          NavData.isActive ? cs_style.active : cs_style.items
        }
      >
        Dialogs
      </NavLink>

      <NavLink
        to="News"
        className={(NavData) =>
          NavData.isActive ? cs_style.active : cs_style.items
        }
      >
        News
      </NavLink>

      <NavLink
        to="Music"
        className={(NavData) =>
          NavData.isActive ? cs_style.active : cs_style.items
        }
      >
        Music
      </NavLink>

      <NavLink
        to="Settings"
        className={(NavData) =>
          NavData.isActive ? cs_style.active : cs_style.items
        }
      >
        Settings
      </NavLink>

      <Friends ffriends={props.ffriends} />
    </nav>
  );
}

export default Navbar;
