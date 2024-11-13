import React from "react";
import Book from "./Book";

const BookList = ({ books, updateShelve }) => (
  <ol className="books-grid">
    {books.map((book) => (
      <li key={book.id}>
        <Book key={book.id} book={book} updateShelve={updateShelve} />
      </li>
    ))}
  </ol>
);

export default BookList;
