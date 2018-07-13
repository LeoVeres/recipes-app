import React from 'react';
import {mount, shallow} from 'enzyme';

import { Dashboard } from './dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
      const dispatch=jest.fn()
      shallow(<Dashboard dispatch={dispatch}/>);
  });
});