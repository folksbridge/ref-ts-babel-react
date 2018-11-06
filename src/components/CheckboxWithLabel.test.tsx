import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import Checkbox from './CheckboxWithLabel';

it('smoke test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox labelOff="Off" labelOn="On" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// it('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = TestUtils.renderIntoDocument(
//     <CheckboxWithLabel labelOn="On" labelOff="Off" />,
//   );

//   const checkboxNode = ReactDOM.findDOMNode(checkbox);

//   // Verify that it's Off by default
//   expect(checkboxNode.textContent).toEqual('Off');

//   // Simulate a click and verify that it is now On
//   TestUtils.Simulate.change(
//     TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'),
//   );
//   expect(checkboxNode.textContent).toEqual('On');
// });
