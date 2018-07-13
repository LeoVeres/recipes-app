import React from 'react';
import {mount, shallow} from 'enzyme';

import { ShoppingList  } from './shoppinglist-page';

describe('<ShoppingList  />', () => {
  it('Renders without crashing', () => {
      const dispatch=jest.fn()
      shallow(<ShoppingList  dispatch={dispatch}/>);
  });
});