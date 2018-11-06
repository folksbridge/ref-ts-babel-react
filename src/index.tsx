import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './components/CheckboxWithLabel'
import Hello from './components/Hello'
import Wow from './components/Wow'

const App = () => {
  return (
    <div>
      <Hello message="Hello" />
      <Checkbox labelOff='Off' labelOn='On' />
      <Wow />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));