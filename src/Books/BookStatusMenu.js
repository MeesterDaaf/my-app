import React from "react";
import { useState } from "react";

function BookStatusMenu({ book, handleShelfChange }) {
  const [shelf, setShelf] = useState(book.shelf);

  //set the shelf to the new value and call the handleShelfChange function
  const onChange = (event) => {
    const newShelf = event.target.value;
    setShelf(newShelf);
    handleShelfChange(book, newShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={onChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookStatusMenu;
