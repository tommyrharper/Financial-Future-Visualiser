import React from 'react';
import { shallow } from 'enzyme'
import User from './User';

it('renders without crashing', () => {
  shallow(<User />)
});
