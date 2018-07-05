import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link, Redirect} from 'react-router-dom';
import EditForm from './edit-form';
import RecipeCard from './recipe-card';
import { fetchRecipes } from '../actions/recipes';
import SearchForm from './searchbar';

export class Dashboard extends React.Component {
    componentDidMount(){
    };
    showEdit(id){
      this.props.history.push(`/dashboard`)
  };

    render() {
        return (
            <div className="dashboard">
                <div className="">
                   <h2> Recipes </h2>
                </div>
                <EditForm showEdit={id => this.showEdit()} {...this.props.selectedRecipe}/>
            </div>
        );
    }

}

const mapStateToProps = (state,props) => {
    
    return {
        recipes: state.recipes.all,
        selectedRecipe: state.recipes.all.find(item=>item.id===props.match.params.id)

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));