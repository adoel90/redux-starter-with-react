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
  
  render() {
    // const { children, inputValue } = this.props
    return (
      <div>
        <h1>Building Real Projects With REDUX</h1>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  

})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchRecipesDispatch : () => dispatch(fetchRecipes())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
