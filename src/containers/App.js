/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes, addReceipent} from '../actions/recipe';

//*Sementara tak menggunakan Component ! Only use in Container.
class App extends Component {

  constructor(){
    super();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      data: {}
    }

  }

  componentDidMount(){
    const { fetchRecipesDispatch } = this.props;
    fetchRecipesDispatch();
  };

  componentDidUpdate(prevProps){
    
  }

  handleInputChange = (e, data ) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({

      ...this.state,
        [data]: {
              ...this.state[data],
              [name]: value
        }
    });
  };


  handleClickRecipe = () => {
    const { addReceipentDispatch } = this.props;
    const { data }= this.state;
    addReceipentDispatch(data.recipe)
    
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

        <br />
        <input type="text" name="recipe" placeholder="Add recipe" onChange={(e) => this.handleInputChange(e, 'data')}/>
        <button onClick={() => this.handleClickRecipe() }>Add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes : state.recipes.list

})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchRecipesDispatch : () => dispatch(fetchRecipes()),
    addReceipentDispatch: (data) => dispatch(addReceipent(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
