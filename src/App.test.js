import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// todo: Homework - 1 ::: Create tests for the stateless/function components!
// todo: things to test: That props properly appear inside of the render
// todo:                 With the list component, that elements appear in the right location and order
// todo:                 With the button, mock a click event



// todo: Homework - OPTIONAL - 2 ::: Create a component that updates it's state via setState (stateful) test that the state
// todo: properly updates, you'll need to use https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/setState.md