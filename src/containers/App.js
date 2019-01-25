/* eslint-disable no-undef */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes, addReceipent} from '../actions/recipe';
import { addUser, getListUser } from '../actions/user'

import './App.css';

//*Sementara tak menggunakan Component ! Only use in Container.
class App extends Component {

  constructor(){
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {}

  }

  componentDidMount(){
    const { fetchRecipesDispatch, getListUserDispatch } = this.props;
    
    fetchRecipesDispatch();
    getListUserDispatch();  
  };

  componentDidUpdate(prevProps){

    const { recipes, user } = this.props;
    const { data } = this.state;

    if(prevProps.recipes !== recipes){
      if(recipes.length != null){
        console.log("Recipes : ", recipes);
      }
    };

    if(prevProps.user !== user){
      if(user.length != null){
        console.log(console.log("User : ", data != null ? data.name : data));
      }
    }
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
  }

  handleSave = (e) => {
    e.preventDefault();
    const { addUserDispatch } = this.props;
    addUserDispatch(this.state)

  };
  
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
        <input type="text" name="recipe" placeholder="Add recipe" onChange={(e) => this.handleInputChange(e, 'data')}/>
        <button onClick={() => this.handleClickRecipe() }>Add</button>    
        
        <hr />
      
        <h2>Building CRUD with "ReqRes API"</h2>
        <div className="grid-container">
          <div className="grid-item">
            <form>
              <input type="text" name="name" placeholder="Type your name..." onChange={(e) => this.handleInputChange(e, 'data')} />
              <label> Type your name</label>
              <br />
              <br />
              <input type="text" name="job" placeholder="Job ?" onChange={(e) => this.handleInputChange(e, 'data')} />
              <label> Your job here</label>
              <br />
              <br />
              <button onClick={(e) => this.handleSave(e) }>Save</button>
            </form>
          </div>
          <div className="grid-item">
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes : state.recipes.list,
  user: state

})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchRecipesDispatch : () => dispatch(fetchRecipes()),
    addReceipentDispatch: (data) => dispatch(addReceipent(data)),
    addUserDispatch : (data) => dispatch(addUser(data)),
    getListUserDispatch : () => dispatch(getListUser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
