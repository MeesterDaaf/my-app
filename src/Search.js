import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import BookList from "./BookList";

const Search = ({ updateShelve, books, onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* Link to navigate back to the main page */}
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList books={books} updateShelve={updateShelve} />
      </div>
    </div>
  );
};

export default Search;
