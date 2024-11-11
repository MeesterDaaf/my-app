//create searchPage component
import React from "react";
import { useState } from "react";
import "./SearchPage.css";
import SearchButton from "./SearchButton";

function SearchPage({ showSearchPage, toggleSearch }) {
  //   const [showSearchPage, setShowSearchpage] = useState(false);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <SearchButton
          toggleSearch={toggleSearch}
          showSearchPage={showSearchPage}
          title="Close"
          className="close-search"
        />

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}

export default SearchPage;
