// SearchButton.js
import React from "react";
import "./SearchPage.css";

function SearchButton({ toggleSearch, showSearchPage, title, className }) {
  return (
    <div>
      <a onClick={() => toggleSearch(!showSearchPage)} className={className}>
        {title}
      </a>
    </div>
  );
}

export default SearchButton;
