import React from "react";

const BookStatusMenu = ({ book, currentShelve, updateShelve }) => {
  const handleChange = (event) => {
    updateShelve(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={currentShelve} onChange={handleChange}>
        <option value="none" disabled>
          Select Shelve
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookStatusMenu;
