import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import ShoppinglistCard from './shoppinglist-card';
import {fetchPlans, fetchItems} from '../actions/mealplanner';
import AddItem from './additem-form';


export class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPlans());
        this.props.dispatch(fetchItems());
    }
    generateList(list){
        if(list){
            return list.map(plan=>
            <ShoppinglistCard key={plan.id}{...plan}/>)
        }
        else{return ''}
    }
    

    render() {
        return (
            <div className="shoppinglist">
                <AddItem/>
                {this.generateList(this.props.extras)}                
                {this.generateList(this.props.plans)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        extras: state.mealplanner.extraItems,
        plans: state.mealplanner.plans
    };
};

export default requiresLogin()(connect(mapStateToProps)(ShoppingList));

// {this.generateList(this.props.plans)}