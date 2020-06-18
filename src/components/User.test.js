import React from 'react';
import { shallow } from 'enzyme'
import User from './User';

test('renders without crashing', () => {
  shallow(<User />)
});
