import React, { Component } from 'react';
import Button from './components/button/button.component';
import List from './components/list/list.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      listItems: [
        {
          id: 1,
          itemTitle: "I'm a list item Component",
        },
        {
          id: 2,
          itemTitle: "Me too",
        },
        {
          id: 3,
          itemTitle: "Me three",
        }
      ]
    }
  }

  render() {
    const { listItems } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button
          label="Hello Bridge :)"
          handleClick={() => {
            window.alert('Please test me!')
          }}
        />
        <List
          listItems={listItems}
        />
      </div>
    );
  }
}

export default App;
