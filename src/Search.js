import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";

const Search = ({ updateShelve, books, setBooks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (query) => {
    setQuery(query);

    if (query) {
      try {
        const result = await BooksAPI.search(query, 5);
        setBooks(result);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    } else {
      setBooks([]); // Clear books if query is empty
    }
    console.log("Books:", books);
  };

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
            onChange={(e) => handleSearch(e.target.value)}
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
