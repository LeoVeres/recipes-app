import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link} from 'react-router-dom';
import RecipeForm from './recipe-form';




export class NewRecipe extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="newrecipe">
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