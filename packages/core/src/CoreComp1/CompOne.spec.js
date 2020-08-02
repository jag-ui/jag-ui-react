import React from 'react';
import ReactDOM from 'react-dom';
import CoreComp1 from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoreComp1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
