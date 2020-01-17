import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: `Jared's To Do List!`,
      toDoList: ['Grocery Shopping', 'Laundry', 'Rake Leafs']
    };

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleDeleteItem(index) {
    let array = [...this.state.toDoList];
    array.splice(index, 1);

    this.setState({
      toDoList: array
    });
  }

  handleAddItem(item) {
    const newToDoList = this.state.toDoList.concat(item);

    this.setState({
      toDoList: newToDoList
    });
  }
  
  render() {
    return (
      <div className="App">
        <ToDoList 
          list={ this.state.toDoList } 
          name={ this.state.listName } 
          handleDeleteItem={ this.handleDeleteItem }
          onAddItem={ this.handleAddItem }
        />
      </div>
    );
  }
}


export default App;
