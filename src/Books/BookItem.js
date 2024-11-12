import React from "react";
import BookStatusMenu from "./BookStatusMenu";
import { useState } from "react";

function BookItem({ book, handleShelfChange }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.coverUrl ? book.coverUrl : ""})`,
          }}
        ></div>
        <BookStatusMenu book={book} handleShelfChange={handleShelfChange} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}

export default BookItem;
