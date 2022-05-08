import React, { useState } from "react";
import "./SearchBar.scss";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [style, setStyle] = useState("");

  const handleClick = () => {
    setStyle("active");
  }

  return (
    <div className="searchArea">
      <form method="GET">
        <input type="text" className = {style}  placeholder="Search" />
      </form>
      <i className="searchIcon" onClick={handleClick}><Search /></i>
    </div>
  );
};

export default SearchBar;
