import React, { Component, Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'
class PortfolioContainer extends Component {

  render() {
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {
            this.props.boughtStocks.map(stock => <PortfolioStock key={stock.id} stock={stock}/>)
          }
        </ul>
      </Fragment>
    );
  }

}

export default PortfolioContainer;
