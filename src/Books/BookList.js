import React from "react";
import BookShelf from "./BookShelf";
import currentBooks from "./CurrentBooks";
import { useState } from "react";

function BookList() {
  const [books, setBooks] = useState(currentBooks);

  const handleShelfChange = (book, newShelf) => {
    setBooks((prevBooks) =>
      // map over the books and update the shelf of the book that matches the id
      prevBooks.map((b) => (b.id === book.id ? { ...b, shelf: newShelf } : b))
    );
  };

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          title="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
          handleShelfChange={handleShelfChange}
        />
        <BookShelf
          title="Want to Read"
          books={books.filter((book) => book.shelf === "wantToRead")}
          handleShelfChange={handleShelfChange}
        />
        <BookShelf
          title="Read"
          books={books.filter((book) => book.shelf === "read")}
          handleShelfChange={handleShelfChange}
        />
        <BookShelf
          title="None"
          books={books.filter((book) => book.shelf === "none")}
          handleShelfChange={handleShelfChange}
        />
      </div>
    </div>
  );
}

export default BookList;
