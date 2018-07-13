import React from 'react';
import {mount, shallow} from 'enzyme';

import { MealPlanner } from './mealplanner-page';

describe('<MealPlanner />', () => {
  it('Renders without crashing', () => {
      const dispatch=jest.fn()
      shallow(<MealPlanner dispatch={dispatch}/>);
  });
});