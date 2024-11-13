import React from "react";
import BookList from "./BookList";

const Shelve = ({ title, books, updateShelve }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BookList books={books} updateShelve={updateShelve} />
    </div>
  </div>
);

export default Shelve;
