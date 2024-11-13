import "./App.css";
import React, { useState } from "react";
import Shelve from "./Shelve";
import Search from "./Search";
import currentBooks from "./CurrentBooks";
import SearchButton from "./SearchButton";

const App = () => {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState({
    currentlyReading: currentBooks,
    wantToRead: [],
    read: [],
  });

  const updateShelve = (book, newShelve) => {
    setShelves((prevShelves) => {
      const updatedShelves = { ...prevShelves };
      // Verwijder het boek uit de huidige shelve
      Object.keys(updatedShelves).forEach((shelve) => {
        updatedShelves[shelve] = updatedShelves[shelve].filter(
          (b) => b.id !== book.id
        );
      });
      // Voeg het boek toe aan de nieuwe shelve
      if (newShelve !== "none") {
        updatedShelves[newShelve].push(book);
      }
      return updatedShelves;
    });
  };

  return (
    <div className="app">
      <Search updateShelve={updateShelve} books={books} setBooks={setBooks} />
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelve
            title="Currently Reading"
            books={shelves.currentlyReading}
            updateShelve={updateShelve}
          />
          <Shelve
            title="Want to Read"
            books={shelves.wantToRead}
            updateShelve={updateShelve}
          />
          <Shelve
            title="Read"
            books={shelves.read}
            updateShelve={updateShelve}
          />
        </div>
      </div>
      <SearchButton title="Add a book" className="open-search" />
    </div>
  );
};

export default App;
