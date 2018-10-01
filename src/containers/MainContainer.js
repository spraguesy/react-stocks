import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  handleInput(){

  }

  handleRadio(){

  }

  handleSelect(){

  }

  render() {
    return (
      <Fragment>
        <SearchBar/>

          <div class="row">
            <div class="col-8">

              <StockContainer/>

            </div>
            <div class="col-4">

              <PortfolioContainer/>
              
            </div>
          </div>
      </Fragment>
    );
  }

}

export default MainContainer;
