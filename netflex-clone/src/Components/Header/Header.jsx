import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationNoneIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountBoxIcon from "@mui/icons-material/PortraitOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownOutlined";






export default function Header() {
    // const[isScroll]
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              {/* <li>Netflex</li> */}
              <img className="img_logo"
                src="https://pngimg.com/uploads/netflix/netflix_PNG12.png"
                alt="Netflix logo"
              />
              <li>Home</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
