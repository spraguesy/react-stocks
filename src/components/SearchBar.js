import React, { Fragment } from "react";

const SearchBar = props => {
  return (
    <Fragment>
      <strong>Search for Stocks!</strong>
      <input type="text" onChange={props.handleInput} value={props.term} />
      <br />

      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="None"
          checked={props.sort === "None" ? true : false}
          onClick={props.handleRadio}
        />
        None
      </label>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={props.sort === "Alphabetically" ? true : null}
          onClick={props.handleRadio}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={props.sort === "Price" ? true : null}
          onClick={props.handleRadio}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleSelect}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </Fragment>
  );
};

export default SearchBar;
