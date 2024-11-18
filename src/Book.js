import React from "react";

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

      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={(event) => updateShelve(book, event.target.value)}
        >
          <option value="none">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
);

export default Book;
