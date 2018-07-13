import React from 'react';
import {mount, shallow} from 'enzyme';

import { NewRecipe } from './new-recipe-page';

describe('<New Recipe />', () => {
  it('Renders without crashing', () => {
      const dispatch=jest.fn()
      shallow(<NewRecipe dispatch={dispatch}/>);
  });
});