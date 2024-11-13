// App.js
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shelve from "./Shelve";
import Search from "./Search";
import currentBooks from "./CurrentBooks";

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
    <Router>
      <div className="app">
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
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
                {/* Link to the search route */}
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            }
          />

          {/* Search page route */}
          <Route
            path="/search"
            element={
              <Search
                updateShelve={updateShelve}
                books={books}
                setBooks={setBooks}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
