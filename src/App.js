import "./App.css";
import { useState } from "react";
import SearchPage from "./Search/SearchPage";
import SearchButton from "./Search/SearchButton";
import BookList from "./Books/BookList";

function App() {
  const [showSearchPage, toggleSearch] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          toggleSearch={toggleSearch}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookList />
          <div className="open-search">
            <SearchButton
              toggleSearch={toggleSearch}
              showSearchPage={showSearchPage}
              title="Add a book"
              className="open-search"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
