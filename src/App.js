// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shelve from "./Shelve";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await BooksAPI.getAll();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  const updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    // Update local state or refetch books here
    book.shelf = shelf;
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === book.id ? { ...b, shelf } : b))
    );
  };

  const handleSearch = async (query) => {
    if (query) {
      try {
        const result = await BooksAPI.search(query, 5);

        // Ensure result is an array, otherwise set to an empty array
        setBooks(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]); // Set books to empty array on error
      }
    } else {
      setBooks([]); // Clear books if query is empty
    }
  };

  const shelves = [
    {
      title: "Currently Reading",
      id: "currentlyReading",
      books: books.filter((book) => book.shelf === "currentlyReading"),
    },
    {
      title: "Want to Read",
      id: "wantToRead",
      books: books.filter((book) => book.shelf === "wantToRead"),
    },
    {
      title: "Read",
      id: "read",
      books: books.filter((book) => book.shelf === "read"),
    },
  ];

  return (
    // Your component JSX here
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
                  {shelves.map((shelve) => (
                    <Shelve
                      key={shelve.id}
                      title={shelve.title}
                      books={shelve.books}
                      updateShelve={updateBookShelf}
                    />
                  ))}
                  ;
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
                books={books}
                setBooks={setBooks}
                // query={query}
                onSearch={handleSearch}
                updateShelve={updateBookShelf}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
