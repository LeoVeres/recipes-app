import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link, Redirect} from 'react-router-dom';
import RecipeForm from './recipe-form';


export class Dashboard extends React.Component {
    render() {
        let ingredientsList;
        let ingredientsHeader;
        if(this.props.ingredients){
            ingredientsList= this.props.ingredients.map((item,i) => <li key={i}>{item}</li>);
            ingredientsHeader= <div>Ingredients:</div>
        };
        let directionList;
        let directionHeader;
        if(this.props.directions){
            directionList= this.props.directions.map((item,i) => <li key={i}>{item}</li>);
            directionHeader= <div>Directions:</div>;
        };
        return (
            <div className="dashboard">
                <div className="">
                  <h2> Recipes </h2>
                <RecipeForm/>
                </div>
                <Link className="link" to="/dashboard">Recipes</Link>
                <Link className="link" to="/mealplanner">Meal Planner</Link>
                <Link className="link" to="/shoppinglist">Shopping List</Link>
               <div className="recipeBox">
                  Recipe: {this.props.recipe} 
                  {ingredientsHeader} 
                  <ul>
                    {ingredientsList}
                  </ul>
                  {directionHeader}
                  <ul>
                    {directionList}
                  </ul>   
                  <div>
                    Date last made: {this.props.datemade}
                  </div> 
                </div>        
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        datemade: state.recipes.datemade,
        ingredients:state.recipes.ingredients,
        directions:state.recipes.directions,
        recipe: state.recipes.recipe
    };
};

//export default connect(mapStateToProps)(Dashboard);

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


    // const {currentUser} = state.auth;
        // username: state.auth.currentUser.username,
        // name: `${currentUser.firstName} ${currentUser.lastName}`