import React from 'react';
import {mount, shallow} from 'enzyme';

import { HeaderBar } from './header';

describe('<HeaderBar />', () => {
  it('Renders without crashing', () => {
      const dispatch=jest.fn()
      shallow(<HeaderBar dispatch={dispatch}/>);
  });
});