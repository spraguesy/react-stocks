import React,{Fragment} from 'react'

const Stock = (props) => (
  <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            `${props.stock.ticker} : ${props.stock.price}`
          }</p>
        <button className="btn btn-primary" onClick={() => props.addStock(props.stock)}>Buy Stock</button>
      </div>
    </div>


  </Fragment>
);

export default Stock
