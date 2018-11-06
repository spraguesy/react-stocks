import React, { Component, Fragment } from "react";
import PortfolioStock from "../components/PortfolioStock";
class PortfolioContainer extends Component {
  render() {
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {this.props.ownedStocks.map(stock => {
            console.log(stock);

            return <PortfolioStock key={stock.ticker} stock={stock} />;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default PortfolioContainer;
