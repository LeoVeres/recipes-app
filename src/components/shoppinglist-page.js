import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import ShoppinglistCard from './shoppinglist-card';
import {fetchPlans, updatePlan, createPlan} from '../actions/mealplanner';


export class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPlans());
    }
    generateList(day){
        if(day){
            return day.map(plan=>
            <ShoppinglistCard key={plan.id}{...plan}/>)
        }
        else{return ''}
    }

    render() {
        return (
            <div className="shoppinglist">
                {this.generateList(this.props.plans)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        plans: state.mealplanner.plans
    };
};

export default requiresLogin()(connect(mapStateToProps)(ShoppingList));