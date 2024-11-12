import React from "react";
import BookItem from "./BookItem";
import { useState } from "react";

function BookShelf({ title, books, handleShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* iterate books */}
          {books.map((book) => (
            <li key={book.id}>
              <BookItem book={book} handleShelfChange={handleShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
