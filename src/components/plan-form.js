import React from 'react';
import {Field, reduxForm, focus, reset} from 'redux-form';
import {fetchPlans, createPlan, createItem} from '../actions/mealplanner';
import {required, nonEmpty} from '../validators';





export class PlanForm extends React.Component {
    onSubmit(values) {
        const {day, meal} = values;
        const plan = {meal, day, title:this.props.title, directions: this.props.directions, ingredients:this.props.ingredients, tags:this.props.tags,id:this.props.id};
        // const item ={extra:this.props.ingredients, id:this.props.id};
        return this.props.dispatch(createPlan(plan))
            // .then(()=>this.props.dispatch(createItem(item)))
            .then(()=>this.props.dispatch(reset('plan')))
            .then(() => {this.props.showEdit();
                this.props.dispatch(fetchPlans())}); 
    }
  
    render() {

        return (
            <form
                className="recipe-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h3>{this.props.title}</h3>
                <label htmlFor="day"></label>
                <Field name="day" component="select" validate= {required} required >
                    <option hidden>Day</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </Field>
                <label htmlFor="meal"></label>
                <Field name="meal" component="select" validate= {required} required>
                    <option hidden>Meal</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Snack">Snack</option>
                    <option value="Side">Side</option>
                    <option value="Other">Other</option>
                </Field>
                <button
                    className='save-button'
                    type="submit"
                    disabled={this.props.submitting}>
                    Save
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'plan',
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('edit', Object.keys(errors)[0]))
})(PlanForm);