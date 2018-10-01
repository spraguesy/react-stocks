import React, { Component, Fragment } from 'react';

const SearchBar = () => {
  return (
    <Fragment>
      <strong>Search for Stocks!</strong>
      <input type="text" onChange={null}/>
      <br/>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={null}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </Fragment>
  );
}


export default SearchBar;
