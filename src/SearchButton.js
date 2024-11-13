// SearchButton.js
import React from "react";

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
