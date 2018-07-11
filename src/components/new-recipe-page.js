import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import RecipeForm from './recipe-form';




export class NewRecipe extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="newrecipe">
                <h3>Create a Recipe</h3>
                <RecipeForm/>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default requiresLogin()(connect(mapStateToProps)(NewRecipe));