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
            <ol>Sunday:</ol>
            {this.generateList(this.props.sunday)}
            <ol>Monday:</ol>
            {this.generateList(this.props.monday)}
            <ol>Tuesday:</ol>
            {this.generateList(this.props.tuesday)}
            <ol>Wednesday:</ol>
            {this.generateList(this.props.wednesday)}
            <ol>Thursday:</ol>
            {this.generateList(this.props.thursday)}
            <ol>Friday:</ol>
            {this.generateList(this.props.friday)}
            <ol>Saturday:</ol>
            {this.generateList(this.props.saturday)}

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