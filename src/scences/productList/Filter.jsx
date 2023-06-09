import React from 'react'

export default function Filter(props) {
    var handleFilterByName = props.handleFilterByName;
    var handleFilterMaxPrice = props.handleFilterMaxPrice;
  return (
    <div>
      <form className="filter">
        <div className="well well-small">
          <input
            type="text"
            placeholder="Filter"
            className="search-query span2"
            onChange={handleFilterByName}
          />

          <input
            type="number"
            placeholder="maxPrice"
            className="search-query span2"
            onChange={handleFilterMaxPrice}
          />
         
        </div>
      </form>
    </div>
  );
}
