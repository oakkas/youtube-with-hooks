import React, { useState } from "react";

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="searchBar ui segment">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Search: </label>
          <input
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            value={term}
            type="text"
            name=""
            id=""
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
