import React from "react";
import "../styles/Fakebar.css";
import SearchIcon from "@mui/icons-material/Search";

function Fakebar() {
  return (
    <div className="fakeBar">
      <div className="fake_search">
        <input className="fakeSearchInput" type="text" />
        <SearchIcon className="fakeSearchIcon" />
      </div>
    </div>
  );
}

export default Fakebar;
