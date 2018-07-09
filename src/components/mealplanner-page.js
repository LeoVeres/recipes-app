import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import MealplannerCard from './mealplanner-card';
import {fetchPlans, updatePlan, createPlan} from '../actions/mealplanner';


export class MealPlanner extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPlans());
    }

    generateList(day){
        if(day){
            return day.map(plan=>
            <MealplannerCard key={plan.id}{...plan}/>)
        }
        else{return ''}
    }

    render() {
        return (
            <div className="mealplanner">
            <ul>Sunday:
            {this.generateList(this.props.sunday)}
            </ul>
            <ul>Monday:
            {this.generateList(this.props.monday)}
            </ul>
            <ul>Tuesday:
            {this.generateList(this.props.tuesday)}
            </ul>
            <ul>Wednesday:
            {this.generateList(this.props.wednesday)}
            </ul>
            <ul>Thursday:
            {this.generateList(this.props.thursday)}
            </ul>
            <ul>Friday:
            {this.generateList(this.props.friday)}
            </ul>
            <ul>Saturday:
            {this.generateList(this.props.saturday)}
            </ul>

           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
     monday: state.mealplanner.plans.filter(item=>item.day==='Monday'),
     tuesday: state.mealplanner.plans.filter(item=>item.day==='Tuesday'),
     wednesday: state.mealplanner.plans.filter(item=>item.day==='Wednesday'),
     thursday: state.mealplanner.plans.filter(item=>item.day==='Thursday'),
     friday: state.mealplanner.plans.filter(item=>item.day==='Friday'),
     saturday: state.mealplanner.plans.filter(item=>item.day==='Saturday'),
     sunday: state.mealplanner.plans.filter(item=>item.day==='Sunday')
    };
};

export default requiresLogin()(connect(mapStateToProps)(MealPlanner));