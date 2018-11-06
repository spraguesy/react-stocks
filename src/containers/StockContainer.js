import React, { Component, Fragment } from "react";
import Stock from "../components/Stock";
const URL = "http://localhost:3000/stocks";

class StockContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data }));
  }

  handleStockFilters = stocks => {
    let filteredStocks = stocks.slice();

    if (this.props.term.length > 0) {
      filteredStocks = this.searchStock(filteredStocks);
    }

    if (this.props.filter !== "None") {
      filteredStocks = this.filterStocks(filteredStocks);
    }

    if (this.props.sort !== "None") {
      filteredStocks = this.handleSort(filteredStocks);
    }

    return filteredStocks;
  };

  searchStock = stocks => {
    return stocks.filter(stock => {
      return stock.name.toLowerCase().includes(this.props.term.toLowerCase());
    });
  };

  filterStocks = stocks => {
    return stocks.filter(stock => {
      return stock.type === this.props.filter;
    });
  };

  handleSort = stocks => {
    switch (this.props.sort) {
      case "Alphabetically":
        return stocks.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return stocks.sort((a, b) => a.price - b.price).reverse();
    }
  };

  render() {
    return (
      <Fragment>
        <h2>Stocks</h2>
        {this.handleStockFilters(this.state.stocks).map(stock => {
          return (
            <Stock
              key={stock.ticker}
              stock={stock}
              buyStock={this.props.buyStock}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default StockContainer;
