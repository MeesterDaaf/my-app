import React from "react";
import BookStatusMenu from "./BookStatusMenu";

const Book = ({ book, updateShelve }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${
            book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ""
          })`,
        }}
      ></div>
      <BookStatusMenu
        book={book}
        currentShelve={book.shelve}
        updateShelve={updateShelve}
      />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
);

export default Book;
