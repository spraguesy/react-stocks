import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <Fragment>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} addStock={this.props.addStock}/>)
        }
      </Fragment>
    );
  }

}

export default StockContainer;
