/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes } from '../actions/recipe';

//*Sementara tak menggunakan Component ! Only use in Container.
class App extends Component {

  constructor(){
    super();

  }

  componentDidMount(){
    const { fetchRecipesDispatch } = this.props;
    fetchRecipesDispatch();
  };

  componentDidUpdate(prevProps){
    
  }
  
  render() {
    
    const { recipes } = this.props;
    
    return (
      <div>
        <h1>Building Real Projects With REDUX</h1>
        <ul> 
          {recipes.map((data, i) => {
            return <li key={i}> {data.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes : state.recipes.list

})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchRecipesDispatch : () => dispatch(fetchRecipes())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
