
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Wow from './Wow';

enzyme.configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  enzyme.shallow(<Wow />);
});
