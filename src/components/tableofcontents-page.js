import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';

export class TableOfContents extends React.Component {

  render() { 

    return (
      <div className="landingpage">
      <h2 className="landingpage-header">Table of Contents</h2>
      <ul className="table-of-contents">
          <li>
              Section 1: Recipes (<i className="fas fa-book"></i>)
              <ul className="table-of-contents-notes">
              <li>- search for recipes by title, ingriedients, or tags (<i className="fas fa-search"></i>)</li>
              <li>- add recipes to your meal plan (<i className="far fa-calendar-plus"></i>)</li>
              <li>- edit a recipe (<i className="fas fa-pencil-alt"></i>)</li>
              <li>- delete a recipe (<i className="fas fa-trash-alt"></i>)</li>
              </ul> 
          </li>
          <li>
              Section 2: Create a Recipe (<i className="fas fa-plus-square"></i>)
              <ul className="table-of-contents-notes">
              <li>- enter a title, ingriedients, directions, and tags before saving your new recipe</li>
              <li>- be sure to seperate ingriedients and tags with a comma</li>
              </ul> 
          </li>
          <li>
              Section 3: Meal Planner (<i className="fas fa-calendar-alt"></i>)
              <ul className="table-of-contents-notes">
              <li>- plan meals for the week</li>
              <li>- check meals off as you make them (<i className="fas fa-check"></i>) </li> 
              </ul>                
          </li>
          <li>
              Section 4: Shopping List (<i className="fas fa-shopping-cart"></i>)
              <ul className="table-of-contents-notes">
              <li>- ingriedients from your planned meals will automatically show up on your shopping list</li> 
              <li>- add an item to your list (<i className="fas fa-plus"></i>) </li> 
              <li>- check off an item (<i className="fas fa-check"></i>)</li>
              </ul> 
          </li>
          <li>
              Section 5: Logging Out (<i className="fas fa-sign-out-alt"></i>)
              <ul className="table-of-contents-notes">
              <li>- have a nice day!</li> 
              </ul> 
          </li>
      </ul> 

      </div>
    );
  }
}

export default requiresLogin()(connect()(TableOfContents));