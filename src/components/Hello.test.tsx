/* tslint:disable-next-line  */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import Hello from './Hello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Hello message="Hello" />, div);
  ReactDom.unmountComponentAtNode(div);
});
