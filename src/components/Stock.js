import React, { Fragment } from "react";

const Stock = props => {
  const { ticker, name, price, type } = props.stock;
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <button
            className="btn btn-primary"
            onClick={() => props.buyStock(props.stock)}
          >
            Buy Stock
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Stock;
