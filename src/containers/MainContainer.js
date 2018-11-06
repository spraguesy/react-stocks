import React, { Component, Fragment } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";
const URL = "http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    term: "",
    sort: "None",
    filter: "None",
    ownedStocks: [],
    ownedTickers: []
  };

  handleInput = term => {
    term.persist();
    this.setState({ term: term.target.value });
  };

  handleRadio = event => {
    event.persist();
    console.log(event.target.value);

    this.setState({ sort: event.target.value });
  };

  handleSelect = event => {
    event.persist();
    this.setState({ filter: event.target.value });
  };

  buyStock = stock => {
    if (!this.state.ownedTickers.includes(stock.ticker)) {
      fetch(URL + `/${stock.id}`)
        .then(resp => resp.json())
        .then(data => {
          this.setState(state => {
            return {
              ownedStocks: [...state.ownedStocks, data],
              ownedTickers: [...state.ownedTickers, data.ticker]
            };
          });
        });
    }
  };

  render() {
    return (
      <Fragment>
        <SearchBar
          handleInput={this.handleInput}
          handleRadio={this.handleRadio}
          handleSelect={this.handleSelect}
          term={this.state.term}
          sort={this.state.sort}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              term={this.state.term}
              filter={this.state.filter}
              sort={this.state.sort}
              buyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer ownedStocks={this.state.ownedStocks} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainContainer;
