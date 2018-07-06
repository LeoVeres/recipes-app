
import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import ShoppingList from './shoppinglist-page';
import MealPlanner from './mealplanner-page';
import {refreshAuthToken} from '../actions/auth';
import EditPage from './edit-page';
import NewRecipe from './new-recipe-page';
import HeaderBar from './header';
import PlanPage from './plan-page';

export class App extends React.Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
    this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // 1hour
    );
}

stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}
// <Route exact path="/create" component={CreateRecipe}/>     

  render() {
    return (
      <div className="">
        <header className="">
        </header>
        <div className="app">
                <HeaderBar/>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/shoppinglist" component={ShoppingList} />
                <Route exact path="/mealplanner" component={MealPlanner} />
                <Route exact path="/edit/:id" component={EditPage}/>
                <Route exact path="/plan/:id" component={PlanPage}/>
                <Route exact path="/create" component={NewRecipe}/>


        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(App));