// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shelve from "./Shelve";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await BooksAPI.getAll();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  const updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    // Update the main shelf state
    setBooks((prevBooks) => {
      const existingBook = prevBooks.find((b) => b.id === book.id);
      if (existingBook) {
        return prevBooks.map((b) => (b.id === book.id ? { ...b, shelf } : b));
      } else {
        return [...prevBooks, { ...book, shelf }];
      }
    });

    // Update the search results if the book is part of the search view
    setSearchResults((prevResults) =>
      prevResults.map((b) => (b.id === book.id ? { ...b, shelf } : b))
    );
  };

  const handleSearch = async (query) => {
    if (query) {
      try {
        const result = await BooksAPI.search(query, 5);

        // Ensure result is an array, otherwise set to an empty array
        if (Array.isArray(result)) {
          // Match search results with shelf data
          const updatedResults = result.map((searchBook) => {
            const existingBook = books.find((b) => b.id === searchBook.id);
            return existingBook
              ? { ...searchBook, shelf: existingBook.shelf }
              : searchBook;
          });
          setSearchResults(updatedResults);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]); // Clear search results if query is empty
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
                books={searchResults}
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
