/* eslint-disable no-undef */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Modal from 'react-awesome-modal';
import RecipesView from '../components/RecipesView'
import FormCreateUserView from '../components/FormCreateUserView'
import { fetchRecipes, addReceipent} from '../actions/recipe';
import { addUser, getListUser } from '../actions/user'

import './App.css';
import userReducer from '../reducers/user';

//*Sementara tak menggunakan Component ! Only use in Container.
class App extends Component {

  constructor(){
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleClickRecipe = this.handleClickRecipe.bind(this)  
   

    this.state = {
      visible : false
    }

  }

  componentDidMount(){
    const { fetchRecipesDispatch, getListUserDispatch } = this.props;
    
    fetchRecipesDispatch();
    getListUserDispatch();  
  };

  componentDidUpdate(prevProps){

    const { recipes, user, userList } = this.props;
    const { data } = this.state;

    if(prevProps.recipes !== recipes){
      if(recipes.length != null){
        // console.log("Recipes : ", recipes);
      }
    };

    if(prevProps.user !== user){
      
      console.log(user)
      if(user.length != null){
        console.log(user)
        // console.log(console.log("User : ", data != null ? data.name : data));
      }
    }

    if(prevProps.userList !== userList){
      // console.log(userList);
    }
  };

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
    }, () => {
      console.log(this.state)
    });
  };

  handleClickRecipe = () => {
    console.log("Handle Click Recipes...")
  }

  handleSave = (e) => {
    e.preventDefault();
    const { addUserDispatch } = this.props;
    console.log(this.state)
    addUserDispatch(this.state)

    

  };
  openModal() {
    this.setState({
        visible : true
    }); 
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }
  
  render() {
    
    const { recipes, userList } = this.props;
    
    return (
      <div>
        <h1>Building Real Projects With REDUX</h1>
        <RecipesView 
          handleClickRecipe = {this.handleClickRecipe}
          handleInputChange = {this.handleInputChange}
          // {...this.state}
          {...this.props}
        />
        
        <h2>Building CRUD with "ReqRes API"</h2>
        <div className="grid-container">
          <div className="grid-item">
          {/* 
            <FormCreateUserView 
              handleSave = {this.handleSave}
              handleInputChange = {this.handleInputChange}
              {...this.state}
              {...this.props}
            />
          */}
          
            <form>
              <input type="text" name="name" placeholder="Type your name..." onChange={(e) => this.handleInputChange(e, 'data')} />
              <label> Type your name</label>
              <br />
              <br />

              <input type="text" name="job" placeholder="Job ?" onChange={(e) => this.handleInputChange(e, 'data')} />
              <label> Your job here</label>
              <br />
              <br />

              <button onClick={(e) => handleSave(e) }>Save</button>
            </form>
           
          </div>
          <div className="grid-item">
              <table>
                <thead>
                  <tr>
                    <th>*</th>  
                    <th>First Name</th>
                    <th>Last Name</th>  
                    <th>Edit</th>  
                  </tr>
                </thead>
                <tbody>
                  { userList.user.length != null ? userList.user.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td><img src={data.avatar} alt="Avatar" /></td>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}  </td>
                        <td>
                          <input type="button" value="Edit" onClick={() => this.openModal()} />
                        </td>
                      </tr>
                    ) 
                  }) : null }
                </tbody>
              </table>
                  
          </div>
        </div>

        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAway={() => this.closeModal()}>
            <div>
                <h1>Title</h1>
                <p>Some Contents</p>
                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
            </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes : state.recipes.list,
  userList: state.user,
  user: state
});

const mapDispatchToProps = (dispatch) => {

  return {
    fetchRecipesDispatch : () => dispatch(fetchRecipes()),
    addReceipentDispatch: (data) => dispatch(addReceipent(data)),
    addUserDispatch : (data) => dispatch(addUser(data)),
    getListUserDispatch : () => dispatch(getListUser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
