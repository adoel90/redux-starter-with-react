/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes, addReceipent} from '../actions/recipe';
import { addUser } from '../actions/user'

//*Sementara tak menggunakan Component ! Only use in Container.
class App extends Component {

  constructor(){
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {}

  }

  componentDidMount(){
    const { fetchRecipesDispatch } = this.props;
    
    fetchRecipesDispatch();
  };

  componentDidUpdate(prevProps){

    const { recipes, user } = this.props;
    console.log("Recipes : ", recipes);
    console.log("User : ", user);

    if(prevProps.recipes !== recipes){
      console.log("Recipes v2 : ", recipes);
    };

    if(prevProps.user !== user){
      console.log(console.log("User v2: ", user));
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
    },() => {
      // console.log(this.state)
    });
  };


  handleClickRecipe = () => {
    const { addReceipentDispatch } = this.props;
    
    // addReceipentDispatch(data.recipe)
    
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
    )
  }
}

const mapStateToProps = (state) => ({
  recipes : state.recipes.list,
  user: state.user.user

})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchRecipesDispatch : () => dispatch(fetchRecipes()),
    addReceipentDispatch: (data) => dispatch(addReceipent(data)),
    addUserDispatch : (data) => dispatch(addUser(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
