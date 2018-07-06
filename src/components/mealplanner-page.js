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
            <div>Sunday</div>
            {this.generateList(this.props.sunday)}
            <div>Monday</div>
            {this.generateList(this.props.monday)}
            <div>Tuesday</div>
            {this.generateList(this.props.tuesday)}
            <div>Wednesday</div>
            {this.generateList(this.props.wednesday)}
            <div>Thursday</div>
            {this.generateList(this.props.thursday)}
            <div>Friday</div>
            {this.generateList(this.props.friday)}
            <div>Saturday</div>
            {this.generateList(this.props.sunday)}

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